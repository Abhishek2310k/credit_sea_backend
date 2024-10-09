"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var Connect_1 = __importDefault(require("./Database/Connect"));
var Loan_1 = __importDefault(require("./Routes/Loan"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Use CORS with default options to allow all origins
app.use('/api', Loan_1.default);
// Use the PORT from environment variables or default to 4000
var PORT = process.env.PORT || 4000;
(0, Connect_1.default)();
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
