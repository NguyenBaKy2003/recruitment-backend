// models/Skill.js
import connectDB from "../db/index.js";

const getAllSkills = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM skill", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createSkill = (skillData) => {
  return new Promise((resolve, reject) => {
    const { name, category_id } = skillData;
    connectDB.query(
      "INSERT INTO skill (name, category_id) VALUES (?, ?)",
      [name, category_id],
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

export { getAllSkills, createSkill };
