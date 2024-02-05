
const mongoose = require("mongoose");


const applicationSchema = mongoose.Schema(
  {
    Titile: {
      type: String,
      trim: true,
    },
    Description: {
      type: String,
      trim: true,
    },
    Number: {
      type: Number,
      trim: true,
    },
    Parent: {
      type: String,
      trim: true,
    },
    Status: {
        type: String,
        trim: true,
    },
    StatusId: {
        type: Number,
        trim: true,
    },
    proUid: {
        type: String,
        trim: true,
    },
    ProcStatus:{
        type: String,
        trim: true,
    },
    RocCode: {
        type: String,
        trim: true,
    },
    Parallel: {
        type: String,
        trim: true,
    },
    InitUser: {
        type: String,
        trim: true,
    },
    CurUser: {
        type: String,
        trim: true,
    },
    CreateDate: {
        type: String,
        
    },
    InitDate: {
        type: String,
        
    },
    UpadateDate: {
      type: String,
      trim: true,
    },
    Data: {
        type: String,
        trim: true,
    },
    Pin: {
        type: String,
        trim: true,
    },
    Duration: {
        type: String,
        trim: true,
    },
    DriveFolderUid: {
        type: String,
        trim: true,
    },
    RoutingData: {
        type: String,
        trim: true,
    },
},{
    timestamps: true,
}

   
);



const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
