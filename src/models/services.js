// models/Services.js
import { connectDB } from "../db/index.js";
const getAllServices = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM services", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createService = (serviceData) => {
  return new Promise((resolve, reject) => {
    const { jobPostName, service_name, price } = serviceData;
    connectDB.query(
      "INSERT INTO services (jobPostName, service_name, price) VALUES (?, ?, ?)",
      [jobPostName, service_name, price],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

export { getAllServices, createService };
