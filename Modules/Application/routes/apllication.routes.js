const express = require("express");
const { applicationController } = require("../controller");
const router = express.Router();

router.post('/createapplication', applicationController.createApplication);
router.get('/getapplication', applicationController.getApplication);
router.get('/getapplication/:id', applicationController.getApplicationById);
router.delete('/deleteapplication/:id', applicationController.deleteApplication);

module.exports = router;