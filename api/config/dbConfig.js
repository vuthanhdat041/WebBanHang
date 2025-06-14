const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === "true",
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Kết nối SQL Server thành công!");
    } catch (err) {
        console.error("❌ Lỗi kết nối:", err);
        process.exit(1); // Thoát ứng dụng nếu kết nối thất bại
    }
};

module.exports = { sequelize, connectDB }; 