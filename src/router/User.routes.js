const router = require('express').Router();
const verifyToken = require('../Middleware/ValidateToken');
const register = require('../controller/RegisterController');
const user = require('../controller/UserController');
const upLoadsProfile = require('../Lib/Multer').upLoadsProfile;




router.post('/register-client', upLoadsProfile.single('image'), register.registerClient);
router.post('/register-delivery', [verifyToken, upLoadsProfile.single('image')], register.registerDelivery);

router.get('/get-user-by-id', verifyToken, user.getUserById);
router.put('/edit-profile', verifyToken, user.editProfile);
router.get('/get-user-updated', verifyToken, user.getUserUpdated);
router.put('/change-password', verifyToken, user.changePassword);
router.put('/change-image-profile', [verifyToken, upLoadsProfile.single('image')], user.changeImageProfile);
router.get('/get-addresses', verifyToken, user.getAddressesUser);
router.delete('/delete-street-address/:idAddress', verifyToken, user.deleteStreetAddress);
router.post('/add-new-address', verifyToken, user.addStreetAddress);
router.get('/get-address', verifyToken, user.getAddressOne);
router.put('/update-notification-token', verifyToken, user.updateNotificationToken);
router.get('/get-admins-notification-token', verifyToken, user.getAdminNotificationToken);
router.put('/update-delivery-to-client/:idPerson', verifyToken, user.updateDeliveryToClient);

module.exports = router;