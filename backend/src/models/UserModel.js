const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        phone: { type: String, unique: true },
        birth_date: { type: Date, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
