const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, 
            required: true },
    email: { type: String, 
             required: true },
    password: { type: String, 
                required: true },
    role: { type: String, 
            enum: ['admin', 'lab_technician'], 
            default: 'lab_technician' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }
});

module.exports = mongoose.model('User', userSchema);
