const multer = require('multer');
const path = require('path');

var storageProfile = multer.diskStorage({

    destination: (req, res, cb) => {
        cb(null, 'src/Uploads/Profile')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }

});

const upLoadsProfile = multer({ storage: storageProfile });


var storageProducts = multer.diskStorage({

    destination: (req, res, cb) => {
        cb(null, 'src/Uploads/Products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }

});

const upLoadsProducts = multer({ storage: storageProducts });

module.exports = {
    upLoadsProfile,
    upLoadsProducts
}