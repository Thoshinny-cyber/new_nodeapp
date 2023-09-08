const express= require('express')
const assetRouter = express.Router();


// const router = express.Router();
const Asset = require('../models/assets');



//To get all asset details
assetRouter.route("/").get(async (req, res) => {
    try {
        const asset = await Asset.find();
        // await asset.save();
        res.status(200).json(asset);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//To add assets to db 
assetRouter.route("/assets").post(async (req, res) => {
      try {
          const asset = new Asset(req.body);
          await asset.save();
          res.status(200).json(asset);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
  });

//To get assets that are only available
assetRouter.route("/").get(async (req, res) => {
    try {
        const availableAssets = await Asset.find({ status: 'available' });
        res.json(availableAssets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//To lend assets
assetRouter.route("/id").patch(async(req,res)=>{
    try {
        const asset = await Asset.findByIdAndUpdate(
            req.params.id,
            { 
              status: 'unavailable', 
              students: { 
                studentId: req.body.studentId, 
                borrowed_date:Date.now(),
                return_date:req.body.return_date
              } 
            },
            { new: true }
        );
        res.json(asset);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//To update the return 
assetRouter.route("/id").patch(async(req,res)=>{
    try {
        const asset = await Asset.findById(req.params.id);
    
        if (!asset) {
          return res.status(404).json({ message: 'Asset not found' });
        }
    
        if (asset.status === 'available') {
          return res.status(400).json({ message: 'Asset already available' });
        }
    
        const returnDate = new Date(asset.return_date);
        const lendDate = new Date(asset.borrowed_date);
    
        const diffTime = Math.abs(returnDate - lendDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        const finePerDay = 10; // Change this as required
        const maxFine = 100; // Change this as required
    
        let fine = 0;
        if (diffDays > 5) {
          fine = Math.min(maxFine, finePerDay * (diffDays - asset.maxLendDays));
        }
    
        const updatedAsset = await Asset.findByIdAndUpdate(
          req.params.id,
          {
            status: 'available',
            students: {
              studentId: null,
              borrowed_date:null,
              return_date:Date.now()
          
            },
            fine: fine,
          },
          { new: true }
        );
    
        res.json(updatedAsset);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});


module.exports = assetRouter;

