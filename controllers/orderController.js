
const asyncHandler = require('express-async-handler')
const cloudinary = require('cloudinary').v2;
const fs = require('fs')


const getAllOrders = () => {
    res.status(200).json({msg: "Get all orders"})
}

const addOrder = () => {
    res.status(201).json({msg: "Add Order"})
}

const updateOrder = () => {
    res.status(200).json({msg: "update order"})
}

// cancel order
const deleteOrder = () => {
    res.status(200).json({msg: "cancel order"})
}


module.exports = {
    getAllOrders,
    addOrder,
    updateOrder,
    deleteOrder
}