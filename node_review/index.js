const express = require("express");
const { connectUserDB } = require("./db");
const Order = require("./OrderSchema");
const Inventory = require("./InventorySchema");
const User = require("./UserSchema");
const jwt = require("jsonwebtoken");
const checkLogin = require("./checkLogin");

const app = express();
app.use(express.json());

app.get("/all", async (req, res) => {
    const data = await Order.find();
    res.json(data);
});

app.get("/inventory", async (req, res) => {
    const data = await Inventory.find({ instock: { $lt: 100 } });
    res.json(data);
});

const secretKey = "123456";
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const data = await User.find({ username: username, password: password });
    const token = jwt.sign({ user: username }, secretKey);
    if (data) {
        res.json({
            user: username,
            token: token,
        });
    }
});

app.post("/order", async (req, res) => {
    const { item, price, quantity } = req.body;
    if (!item || !price || !quantity) {
        res.json({
            message: "Fill all field!",
        });
    }
    try {
        const data = new Order({ item, price, quantity });
        await data.save();
        res.json({
            message: "Create successfully!",
        });
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000, () => {
    console.log("App is running at 3000");
    connectUserDB();
});
