const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    date_of_birth: String,
    pan: Number,
    aadhaar: Number,
    salary_earned: Number,
    allowences: Number,
    self_family_pension: String,
    bank_detail: {
        bank_name: String,
        account_number: Number,
        public_or_private: String
    },
});

module.exports = User = mongoose.model("pensioner", ProductSchema);