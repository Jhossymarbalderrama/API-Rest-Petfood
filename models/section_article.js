const db = require('../util/database');

module.exports = class SectionArticle{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static getSectionArticleID(id){
        return db.execute("SELECT * FROM section WHERE id = ?",[id]);
    }

    static getAllSectionArticles(){
        return db.execute('SELECT * FROM section');
    }

    static postSectionArticle(name){
        return db.execute('INSERT INTO section (name) VALUES (?)', [name]);        
    }

    static putSectionArticle(id, name){
        return db.execute('UPDATE section SET name = ? WHERE id = ?',[name, id]);
    }

    static deleteSectionArticle(id){
        return db.execute('DELETE FROM section WHERE id = ?',[id]);
    }
}