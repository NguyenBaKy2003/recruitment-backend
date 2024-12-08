// models/JobSkill.js
import connectDB from "../db/index.js";

const getJobSkills = (jobId) => {
  return new Promise((resolve, reject) => {
    connectDB.query(
      "SELECT * FROM job_skill WHERE job_id = ?",
      [jobId],
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

const addSkillToJob = (jobSkillData) => {
  return new Promise((resolve, reject) => {
    const { job_id, skill_id } = jobSkillData;
    connectDB.query(
      "INSERT INTO job_skill (job_id, skill_id) VALUES (?, ?)",
      [job_id, skill_id],
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

export { getJobSkills, addSkillToJob };
