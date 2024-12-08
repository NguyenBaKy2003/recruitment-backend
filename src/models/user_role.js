// models/UserRole.js
// Table user_role {
//     user_id bigint [pk, ref: > user.id]
//     role_id bigint [pk, ref: > role.id]
//   }
import connectDB from "../db/index.js";

const getUserRoles = (userId) => {
  return new Promise((resolve, reject) => {
    connectDB.query(
      "SELECT * FROM user_role WHERE user_id = ?",
      [userId],
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

const assignRoleToUser = (userRoleData) => {
  return new Promise((resolve, reject) => {
    const { user_id, role_id } = userRoleData;
    connectDB.query(
      "INSERT INTO user_role (user_id, role_id) VALUES (?, ?)",
      [user_id, role_id],
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

export { getUserRoles, assignRoleToUser };
