// import mongoose from "mongoose";
const mongoose = require('mongoose');

const assetRequestSchema = new mongoose.Schema({
    asset_id: { type: mongoose.Schema.Types.ObjectId, 
                ref: 'Asset' },
    requested_by: { type: mongoose.Schema.Types.ObjectId, 
                    ref: 'User' },
    request_date: { type: Date, 
                    default: Date.now },
    approved_by: { type: mongoose.Schema.Types.ObjectId, 
                   ref: 'User' },
    approval_date: { type: Date },
    status: { type: String, 
              enum: ['pending', 'approved', 'rejected'], 
              default: 'pending' }
});

module.exports = mongoose.model('AssetRequest', assetRequestSchema);
