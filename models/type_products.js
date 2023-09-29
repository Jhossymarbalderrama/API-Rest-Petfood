const db = require('../util/database');

module.exports = class TypeProduct{
    constructor(id, name, type){
        this.id = id;
        this.name = name;
        this.type = type;
    }

    static getAllTypesProducts(){
        return db.execute('SELECT * FROM type_products');
    }

    static postTypeProduct(name,type){
        return db.execute('INSERT INTO type_products (name, type) VALUES (?, ?)', [name,type]);        
    }

    static putTypeProduct(id, name, type){
        return db.execute('UPDATE type_products SET name = ?, type = ? WHERE id = ?',[name, type, id]);
    }
 
    static deleteTypeProduct(id){
        return db.execute('DELETE FROM type_products WHERE id = ?',[id]);
    }
}