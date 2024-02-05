const { Application } = require("../../../Models");




const createApplication = async (ApplicationBody) => {
  
  return Application.create(ApplicationBody);
};


const queryApplication = async (filter, options) => {
  const Application = await Application.paginate(filter, options);
  return Application;
};

const getApplication = async () => {
    return Application.find();
  };


const getApplicationById = async (id) => {
  return Application.findById(id);
};


 const deleteApplicationById = async (ApplicationId) => {
    const application = await Application.findByIdAndRemove(ApplicationId);
    if (!application) {
      throw new ApiError(httpStatus.NOT_FOUND, "Application not found");
    }
    return application;
    
  };

module.exports = {
  createApplication,
  queryApplication,
  getApplication,
  getApplicationById,
  deleteApplicationById,
};