const express = require('express');
const router = express.Router()


const {
    getAllOrders,
    addOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orderController')



router.route('/getOrders').get(getAllOrders)
router.route('/addOrder').post(addOrder)
router.route('/upateOrder/:id').patch(updateOrder)
router.route('/deleteOrder/:id').delete(deleteOrder)


module.exports = router