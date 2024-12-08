// models/Role.js
import connectDB from "../db/index.js";

const getAllRoles = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM role", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createRole = (roleData) => {
  return new Promise((resolve, reject) => {
    const { code, role_name } = roleData;
    connectDB.query(
      "INSERT INTO role (code, role_name) VALUES (?, ?)",
      [code, role_name],
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

export { getAllRoles, createRole };
