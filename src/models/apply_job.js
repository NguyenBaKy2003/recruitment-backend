// models/ApplyJob.js
import connectDB from "../db/index.js";

const getAllApplications = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM apply_job", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const applyForJob = (applicationData) => {
  return new Promise((resolve, reject) => {
    const { employer_id, job_id, applicant_id } = applicationData;
    connectDB.query(
      "INSERT INTO apply_job (employer_id, job_id, applicant_id) VALUES (?, ?, ?)",
      [employer_id, job_id, applicant_id],
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

export { getAllApplications, applyForJob };
