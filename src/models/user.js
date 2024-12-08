/*Table user {
  id bigint [pk, increment]
  create_at datetime
  create_by varchar(255)
  delete_at datetime 
  delete_by varchar(255)
  update_at datetime
  update_by varchar(255)
  address varchar(255)
  email varchar(255)
  firstname varchar(255)
  lastname varchar(255)
  phone varchar(255)
  status int
  username varchar(255)
}
  */

// models/User.js
import connectDB from "../db/index.js";

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM user", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const { firstname, lastname, email, phone, address, username, status } =
      userData;
    connectDB.query(
      "INSERT INTO user (firstname, lastname, email, phone, address, username, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [firstname, lastname, email, phone, address, username, status],
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

export { getAllUsers, createUser };
