// dependencies
const express = require('express');

// invoke
const router = express.Router();


// import
const {
    getAllAnnouncements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    uploadAnnImage,
    uploadUpdateAnnImage
} = require('../controllers/announcementController')


// routes
router.route('/getAnnouncements').get(getAllAnnouncements);
router.route('/uploadImage').post(uploadAnnImage);
router.route('/addAnnouncement').post(addAnnouncement);
router.route('/updateAnnouncement/:id').patch(updateAnnouncement);
router.route('/uploadUpdate/:id').post(uploadUpdateAnnImage);
router.route('/deleteAnnouncement/:id').delete(deleteAnnouncement);


//export
module.exports = router;