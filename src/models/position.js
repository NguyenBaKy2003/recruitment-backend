// models/Position.js
import connectDB from "../db/index.js";

const getAllPositions = () => {
  return new Promise((resolve, reject) => {
    connectDB.query("SELECT * FROM position", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createPosition = (positionData) => {
  return new Promise((resolve, reject) => {
    const { name, category_id } = positionData;
    connectDB.query(
      "INSERT INTO position (name, category_id) VALUES (?, ?)",
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

export { getAllPositions, createPosition };
