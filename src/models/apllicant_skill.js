// models/ApplicantSkill.js
import connectDB from "../db/index.js";

const getApplicantSkills = (applicantId) => {
  return new Promise((resolve, reject) => {
    connectDB.query(
      "SELECT * FROM applicant_skill WHERE applicant_id = ?",
      [applicantId],
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

const addSkillToApplicant = (applicantSkillData) => {
  return new Promise((resolve, reject) => {
    const { applicant_id, skill_id } = applicantSkillData;
    connectDB.query(
      "INSERT INTO applicant_skill (applicant_id, skill_id) VALUES (?, ?)",
      [applicant_id, skill_id],
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

export { getApplicantSkills, addSkillToApplicant };
