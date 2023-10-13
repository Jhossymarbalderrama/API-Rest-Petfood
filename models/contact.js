const db = require("../util/database");

module.exports = class Contact {
    constructor(id, id_user, company, email, phone, smartphone, address) {
        this.id = id;
        this.id_user = id_user;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.smartphone = smartphone;
        this.address = address;
    }

    static getContactIDUser(id_user){        
        return db.execute("SELECT * FROM contact WHERE id_user = ?", [id_user]);
    }

    static getAllContacts() {
        return db.execute("SELECT * FROM contact");
    }

    static postContact(id_user, company, email, phone, smartphone, address) {
        return db.execute(
            "INSERT INTO contact (id_user, company, email, phone, smartphone, address) VALUES (?, ?, ?, ?, ?, ?)",
            [id_user, company, email, phone, smartphone, address]
        );
    }

    static putContact(id, id_user, company, email, phone, smartphone, adress) {
        return db.execute("UPDATE contact SET id_user = ?, company = ?, email = ?, phone = ?, smartphone = ?, adress = ? WHERE id = ?",
            [id_user, company, email, phone, smartphone, adress, id]);
    }

    static deleteContact(id) {
        return db.execute("DELETE FROM contact WHERE id = ?", [id]);
    }
};
