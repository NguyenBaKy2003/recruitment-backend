// models/Jobs.js
import connectDB from "../db/index.js";

const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM jobs", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createJob = (jobData) => {
  return new Promise((resolve, reject) => {
    const {
      application_deadline,
      description,
      location,
      position,
      requirements,
      salary,
      title,
      type,
      category_id,
      employer_id,
    } = jobData;
    connectDB.query(
      "INSERT INTO jobs (application_deadline, description, location, position, requirements, salary, title, type, category_id, employer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        application_deadline,
        description,
        location,
        position,
        requirements,
        salary,
        title,
        type,
        category_id,
        employer_id,
      ],
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

export { getAllJobs, createJob };
