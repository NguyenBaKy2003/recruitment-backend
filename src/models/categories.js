// models/Categories.js
import connectDB from "../db/index.js";

const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM categories", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createCategory = (categoryData) => {
  return new Promise((resolve, reject) => {
    const { code, name } = categoryData;
    connectDB.query(
      "INSERT INTO categories (code, name) VALUES (?, ?)",
      [code, name],
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

export { getAllCategories, createCategory };
