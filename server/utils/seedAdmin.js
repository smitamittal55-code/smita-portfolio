const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const password = "Admin@123";
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.findOneAndUpdate(
      { email: "admin@smita.com" },
      {
        name: "Smita Mittal",
        email: "admin@smita.com",
        password: hashedPassword,
        role: "admin",
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    console.log("================================");
    console.log("Admin updated successfully");
    console.log("Email:", admin.email);
    console.log("Password:", password);
    console.log("================================");

    process.exit(0);
  } catch (error) {
    console.error("Seed Admin Error:", error);
    process.exit(1);
  }
};

seedAdmin();