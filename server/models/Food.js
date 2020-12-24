const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  usernameID: {
    ///关联 用户名id
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  categoryID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  }, ///关联 分类
  num: {
    type: Number,
    required: true,
  },
  buyDate: {
    type: String,
    required: true,
  },
  freshTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Food", schema);
