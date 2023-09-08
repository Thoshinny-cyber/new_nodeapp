const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    lab_name: { type: String, 
        required: false },
    asset_name: { type: String, 
        required: false },
    qr: { type: String, 
            required: false },
    type_of_damage: { type: String, 
        // enum: ['QR-Code_damage', 'Item_damage'], 
            required: false },
    cause_of_damage: [{ type: String, 
        // enum: ['student', 'Other'], 
        required: false 
        }],
    student_id: { type: String, 
            required: true 
        },
    amount:{type: String, 
        required: true
    }
});
module.exports = mongoose.model('Report', reportSchema);