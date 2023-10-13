const db = require('../util/database');

module.exports = class User{
    constructor(id, user, password){
        this.id = id;
        this.user = user;
        this.password = password;
    }

    static getUserID(id){
        return db.execute("SELECT * FROM user WHERE id = ?", [id]);
    }

    static getAllUsers(){
        return db.execute('SELECT * FROM user');
    }

    static postUser(user,password){
        return db.execute('INSERT INTO user (user, password) VALUES (?, ?)', [user,password]);
        // return db.execute(`INSERT INTO user (user, password) VALUES (${})`)
    }

    static putUser(id, user, password){
        return db.execute('UPDATE user SET user = ?, password = ? WHERE id = ?',[user, password, id]);
    }

    static deleteUser(id){
        return db.execute('DELETE FROM user WHERE id = ?',[id]);
    }
}