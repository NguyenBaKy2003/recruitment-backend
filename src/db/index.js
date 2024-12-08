import mysql2 from "mysql2";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const connectDB = async () => {
  try {
    // Create a connection to the MySQL database
    const connectionDataBase = await mysql2.createConnection({
      host: process.env.DB_HOST, // Database host
      user: process.env.DB_USER, // Database username
      password: process.env.DB_PASSWORD, // Database password
      database: process.env.DB_NAME, // Database name
      port: process.env.DB_PORT, // Database port (default is 3306)
    });

    console.log(
      "Database connected successfully",
      connectionDataBase.config.host
    );

    // Return the connection object for further use (optional)
    return connectionDataBase;
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export { connectDB };
