const httpStatus = require("http-status");
const pick = require("../../../utils/pick");
const ApiError = require("../../../utils/ApiError");
const catchAsync = require("../../../utils/catchAsync");
const { ApplicationServices } = require("../services/index");

const createApplication = catchAsync(async (req, res) => {
  const application = await ApplicationServices.createApplication(req.body);
  res.status(httpStatus.CREATED).send(application);
});


const getApplications = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["proUid"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await ApplicationServices.queryApplication(filter, options);
  res.send(result);
});

const getApplication = catchAsync(async (req, res) => {
    const getapplication = await ApplicationServices.getApplication();
    if (!getapplication) {
      throw new ApiError(httpStatus.NOT_FOUND, "application not found");
    }
    res.send(getapplication);
  });


const getApplicationById = catchAsync(async (req, res) => {
  const getapplication = await ApplicationServices.getApplicationById(
    req.params.id
  );
  if (!getapplication) {
    throw new ApiError(httpStatus.NOT_FOUND, "application not found");
  }
  res.send(getapplication);
});


const deleteApplication = catchAsync(async (req, res) => {
 const deleteapplication =  await ApplicationServices.deleteApplicationById(req.params.id);
 if (!deleteapplication) {
    throw new ApiError(httpStatus.NOT_FOUND, "application not found");
  }
//   res.json({msg:"delete successfully"});
  res.status(httpStatus.NO_CONTENT).send();
  
});

module.exports = {
  createApplication,
  getApplication,
  getApplications,
  getApplicationById,
  deleteApplication,
};
