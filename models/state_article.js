const db = require('../util/database');

module.exports = class StateArticle{
    constructor(id, state){
        this.id = id;
        this.state = state;
    }

    static getAllStatesArticles(){
        return db.execute('SELECT * FROM state');
    }

    static postStateArticle(state){
        return db.execute('INSERT INTO state (state) VALUES (?)', [state]);        
    }

    static putStateArticle(id, state){
        return db.execute('UPDATE state SET state = ? WHERE id = ?',[state, id]);
    }

    static deleteStateArticle(id){
        return db.execute('DELETE FROM state WHERE id = ?',[id]);
    }
}