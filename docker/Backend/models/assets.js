// import mongoose from "mongoose";
const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
    asset_name: { type: String, 
                  required: true 
                },
    asset_type: { type: String, 
                  required: true 
                },
    category: { type: String, 
                required: true 
              },
    quantity: { type: Number, 
                required: true 
              },
    status: { type: String, 
              enum: ['available', 'unavailable', 'ordered','damaged'], 
              default: 'available' 
            },
    is_lendable: { type: Boolean, 
                   default: false 
                 },
    fine_amount: { type: Number, 
                   default: 0 
                 },
    qr_code: { type: String 
             },
    students: 
        {
            student_id: { type: String },
            borrowed_date: { type: Date },
            return_date: { type: Date },
            is_damaged: { type: Boolean, 
                          default: false 
                        },
            fine_paid: { type: Boolean, 
                         default: false 
                       }
        },
    requested_by: { type: String }
});

module.exports = mongoose.model('Asset', assetSchema);
