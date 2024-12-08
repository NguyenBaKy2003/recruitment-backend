// models/Employer.js
import connectDB from "../db/index.js";

const getAllEmployers = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM employer", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createEmployer = (employerData) => {
  return new Promise((resolve, reject) => {
    const { company_address, company_name, position, user_id, service_id } =
      employerData;
    connectDB.query(
      "INSERT INTO employer (company_address, company_name, position, user_id, service_id) VALUES (?, ?, ?, ?, ?)",
      [company_address, company_name, position, user_id, service_id],
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

export { getAllEmployers, createEmployer };
