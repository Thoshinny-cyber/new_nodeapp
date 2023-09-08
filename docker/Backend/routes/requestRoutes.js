const express= require('express')
const requestRouter = express.Router();

const AssetRequest = require('../models/assetRequest');

requestRouter.route("/assetrequests").get( async (req, res) => {
    try {
        const assetRequest = await AssetRequest.find();
        res.status(200).json(assetRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = requestRouter;