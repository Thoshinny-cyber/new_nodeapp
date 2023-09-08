const mongoose = require('mongoose');
const groupSchema = new mongoose.Schema({
    department_name: { type: String, 
        required: true },
    lab_name: { type: String, 
        required: true },
    lab_type: { type: String, 
            required: true },
    asset_type: [{ type: String, 
        required: true 
        }],
    category: { type: String, 
            required: true 
        }
});
module.exports = mongoose.model('Group', groupSchema);