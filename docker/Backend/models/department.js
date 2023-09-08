// import mongoose from "mongoose";
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    department_name: { type: String, 
                       required: true },
    labs: [
        {
            lab_name: { type: String, 
                        required: true },
            lab_type: { type: String, 
                        required: true },
            assets: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Asset'
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Department', departmentSchema);
