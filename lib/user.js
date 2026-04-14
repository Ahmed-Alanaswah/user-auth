import db from "./db";

export function createUser(email, password) {
  try {
    const result = db
      .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
      .run(email, password);

    return result.lastInsertRowid;
  } catch (err) {
    throw err;
  }
}

export function getUserByEmail(email) {
  return db.prepare("SELECT * from  users WHERE email = ?").get(email);
}
