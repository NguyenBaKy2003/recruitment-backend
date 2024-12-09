// models/ApplicantSkill.js
import connectDB from "../db/index.js";

const getApplicantSkills = (applicantId) => {
  return new Promise((resolve, reject) => {
    // Kiểm tra applicantId trước khi thực hiện truy vấn
    if (!applicantId) {
      return reject(new Error("applicantId không hợp lệ"));
    }

    connectDB.query(
      `SELECT as.applicant_id, s.skill_name 
       FROM applicant_skill AS as
       INNER JOIN skill AS s ON as.skill_id = s.id
       WHERE as.applicant_id = ?`,
      [applicantId],
      (err, results) => {
        if (err) {
          reject(new Error("Lỗi khi truy vấn dữ liệu"));
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

    // Kiểm tra dữ liệu đầu vào
    if (!applicant_id || !skill_id) {
      return reject(new Error("Dữ liệu không hợp lệ"));
    }

    connectDB.query(
      "INSERT INTO applicant_skill (applicant_id, skill_id) VALUES (?, ?)",
      [applicant_id, skill_id],
      (err, results) => {
        if (err) {
          reject(new Error("Lỗi khi thêm kỹ năng cho ứng viên"));
        } else {
          resolve(results);
        }
      }
    );
  });
};

export { getApplicantSkills, addSkillToApplicant };
