const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB");

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model("Message", MessageSchema);

app.post("/contact", async (req, res) => {
    await Message.create(req.body);
    res.send({ success: true });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
