const multer = require('multer');
const {cloudinaryStorage, CloudinaryStorage} = require ('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');


const storage =  new CloudinaryStorage({
    cloudinary : cloudinary,
    params: {
        folder : 'products',
        allowedFormats: ['jpg','jpeg','png'],
    },
})

const upload =  multer({storage: storage});


module.exports = upload;