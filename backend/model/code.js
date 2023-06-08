const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { 
        type: String,
        required: true
    },
    user_id: { 
        type: String,
        required: false
    },
    createdAt: { 
        type: Date,
        default: Date.now
    },
    accessToken: { 
        type: String,
        required: false
    },
    refreshToken: { 
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Codes", codeSchema)