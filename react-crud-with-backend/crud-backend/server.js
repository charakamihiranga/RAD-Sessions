"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = __importDefault(require("./routes/customer-routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    next();
});
app.use('/customer', customer_routes_1.default);
app.listen(3000, (err => {
    console.log("Server running on port 3000");
}));
app.use('/', (req, res, next) => {
    res.status(200).send('Resource not found');
});
