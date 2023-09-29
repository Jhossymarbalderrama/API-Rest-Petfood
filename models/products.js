const db = require("../util/database");

module.exports = class Product {
  constructor(id, id_user, title, description, id_type, date) {
    this.id = id;
    this.id_user = id_user;
    this.title = title;
    this.description = description;
    this.id_type = id_type;
    this.date = date;
  }

  static getAllProducts() {
    return db.execute("SELECT * FROM product");
  }

  static postProduct(id_user, title, description, id_type, date) {
    return db.execute(
      "INSERT INTO product (id_user, title, description, id_type, date) VALUES (?, ?, ?, ?, ?)",
      [id_user, title, description, id_type, date]
    );
  }

  static putProduct(id, id_user, title, description, id_type, date) {
    return db.execute(
      "UPDATE product SET id_user = ?, title = ?, description = ?, id_type = ?, date = ? WHERE id = ?",
      [id_user, title, description, id_type, date, id]
    );
  }

  static deleteProduct(id) {
    return db.execute("DELETE FROM product WHERE id = ?", [id]);
  }
};
