const express = require('express')
const router = express.Router()


const {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    uploadProdImage,
    updateProdImage
} = require('../controllers/productController')


router.route('/getProducts').get(getAllProducts);
router.route('/uploadProdImage').post(uploadProdImage);
router.route('/addProduct').post(addProduct);
router.route('/getSingleProduct/:id').get(getSingleProduct);
router.route('/updateProdImage/:id').post(updateProdImage);
router.route('/updateProduct/:id').patch(updateProduct);
router.route('/deleteProduct/:id').delete(deleteProduct);


module.exports = router