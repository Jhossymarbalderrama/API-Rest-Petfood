const db = require("../util/database");

module.exports = class Article {
    constructor(
        id,
        id_user,
        title,
        subtitle,
        description,
        date,
        id_section,
        state
    ) {
        this.id = id;
        this.id_user = id_user;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.date = date;
        this.id_section = id_section;
        this.state = state;
    }

    static getAllArticles() {
        return db.execute("SELECT * FROM article");
    }

    static postArticle(
        id_user,
        title,
        subtitle,
        description,
        date,
        id_section,
        state
    ) {
        return db.execute(
            "INSERT INTO article (id_user, title, subtitle, description, date, id_section, state) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [id_user, title, subtitle, description, date, id_section, state]
        );
    }

    static putArticle(
        id,
        id_user,
        title,
        subtitle,
        description,
        date,
        id_section,
        state
    ) {
        return db.execute(
            "UPDATE article SET id_user = ?, title = ?, subtitle = ?, description = ?, date = ?, id_section = ?, state = ? WHERE id = ?",
            [id_user, title, subtitle, description, date, id_section, state, id]
        );
    }

    static deleteArticle(id) {
        return db.execute("DELETE FROM article WHERE id = ?", [id]);
    }
};
