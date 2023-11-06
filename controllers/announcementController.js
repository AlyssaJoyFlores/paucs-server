const { response } = require('express');
const Announcement = require('../models/announcementModel')
const asyncHandler = require('express-async-handler')
const cloudinary = require('cloudinary').v2;
const fs = require('fs')

const getAllAnnouncements = async(req, res) => {
    const announcements = await Announcement.find().sort({createdAt: -1})

    res.status(200).json({announcements})
}

const addAnnouncement = async(req, res) => {
    const {anncmnt_title, anncmnt_description, anncmnt_image, anncmnt_date, anncmnt_publisher} = req.body;

    if(!anncmnt_title || !anncmnt_description || !anncmnt_image || !anncmnt_publisher){
        response.status(400)
        throw new Error("All fields are required")
    };


    const announcement = await Announcement.create({
        anncmnt_title, 
        anncmnt_description, 
        anncmnt_image, 
        anncmnt_date, 
        anncmnt_publisher
    });

    res.status(201).json({announcement});
}


const updateAnnouncement = async(req, res) => {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
        res.status(404)
        throw new Error("No announcement found");
    }

    const updateAnnouncement = await Announcement.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    res.status(200).json(updateAnnouncement)
}


const deleteAnnouncement = async (req, res) => {

    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
        res.status(404)
        throw new Error("No announcement found");
    }

   
    try {
        if (announcement.anncmnt_image) {
            const publicId = announcement.anncmnt_image.match(/\/v\d+\/(.+?)\./)[1];
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error("Error deleting image from Cloudinary:", error);
    }

    await Announcement.deleteOne({ _id:announcement});

    res.status(200).json({ message: "Announcement deleted", announcement });
};



const uploadAnnImage = async(req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename:true,
        folder:'announcement-folder'
    })

    fs.unlinkSync(req.files.image.tempFilePath)

    return res.status(200).json({image:{src:result.secure_url}})
}


const uploadUpdateAnnImage = async (req, res) => {
  
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
        return res.status(404).json({ error: "No announcement found" });
    }

    try {
        if (announcement.anncmnt_image) {
            const publicId = announcement.anncmnt_image.match(/\/v\d+\/(.+?)\./)[1];
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error("Error deleting existing image from Cloudinary:", error);
    }

    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'announcement-folder'
    });


    fs.unlinkSync(req.files.image.tempFilePath);

    return res.status(200).json({ image: { src: result.secure_url } });
}



module.exports = {
    getAllAnnouncements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    uploadAnnImage,
    uploadUpdateAnnImage
}