const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    pensioners: [{ aadhaar: Number}],
});

module.exports = Order = mongoose.model("process", OrderSchema);