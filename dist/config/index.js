"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.db_url = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const http_status_1 = __importDefault(require("http-status"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const port = process.env.PORT || 3000;
exports.port = port;
const db_url = process.env.DB_URL;
exports.db_url = db_url;
const status = http_status_1.default;
exports.status = status;
