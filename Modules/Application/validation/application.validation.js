const Joi = require("joi");
const { objectId } = require("../../../validationObjectId/applicationObjectid.validation");

const createApplication = {
  body: Joi.object().keys({
    appTitile:Joi.string(),
    appDescription:Joi.string(),
    appNumber:Joi.string(),
    appParent:Joi.number(),
    appStatus:Joi.string(),
    appStatusId:Joi.number(),
    proUid:Joi.string(),
    appProcStatus:Joi.string(),
    appRocCode:Joi.string(),
    appParallel:Joi.string(),
    appInitUser:Joi.string(),
    appCurUser:Joi.string(),
    appData:Joi.string(),
    appPin:Joi.string(),
    appDuration:Joi.double(),
    appDriveFolderUid:Joi.string(),
    appRoutingData:Joi.string(),
   

  }),
};

const getApplication = {
  query: Joi.object().keys({
    appTitile:Joi.string(),
    appDescription:Joi.string(),
    appNumber:Joi.string(),
    appParent:Joi.number(),
    appStatus:Joi.string(),
    appStatusId:Joi.number(),
    proUid:Joi.string(),
    appProcStatus:Joi.string(),
    appRocCode:Joi.string(),
    appParallel:Joi.string(),
    appInitUser:Joi.string(),
    appCurUser:Joi.string(),
    appData:Joi.string(),
    appPin:Joi.string(),
    appDuration:Joi.double(),
    appDriveFolderUid:Joi.string(),
    appRoutingData:Joi.string(),
  }),
};

const getApplicationsById = {
  params: Joi.object().keys({
    getApplicationId: Joi.string().custom(objectId),
  }),
};



const deleteApplication = {
  params: Joi.object().keys({
    gatewayId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    createApplication,
   getApplication,
   getApplicationsById,
   deleteApplication,
};