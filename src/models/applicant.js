// models/Applicant.js
import connectDB from "../db/index.js";

const getAllApplicants = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM applicant", (err, results) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(results);
      }
    });
  });
};

const createApplicant = (applicantData) => {
  return new Promise((resolve, reject) => {
    const { education, experience, user_id } = applicantData;
    connectDB.query(
      "INSERT INTO applicant (education, experience, user_id) VALUES (?, ?, ?)",
      [education, experience, user_id],
      (err, results) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(results);
        }
      }
    );
  });
};

export { getAllApplicants, createApplicant };
