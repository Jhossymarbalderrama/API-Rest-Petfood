const db = require("../util/database");

module.exports = class Person {
  constructor(id, id_user, name, lastname) {
    this.id = id;
    this.id_user = id_user;
    this.name = name;
    this.lastname = lastname;
  }

  static getPersonIDUser(id_user){
    return db.execute("SELECT * FROM person WHERE id_user = ?", [id_user]);
  }

  static getAllPersons() {
    return db.execute("SELECT * FROM person");
  }

  static postPerson(name, lastname, id_user) {
    return db.execute(
      "INSERT INTO person (name, lastname, id_user) VALUES (?, ?, ?)",
      [name, lastname, id_user]
    );
  }

  static putPerson(id, name, lastname, id_user) {
    return db.execute(
      "UPDATE person SET name = ?, lastname = ?, id_user = ? WHERE id = ?",
      [name, lastname, id_user, id]
    );
  }

  static deletePerson(id) {
    return db.execute("DELETE FROM person WHERE id = ?", [id]);
  }
};
