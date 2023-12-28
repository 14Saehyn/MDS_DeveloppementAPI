const pool = require('./database.js');

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE Utilisateurs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                pseudo VARCHAR(255) NOT NULL,
                mot_de_passe VARCHAR(255) NOT NULL
            );
        `);

        await pool.query(`
            CREATE TABLE Terrains (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(50) NOT NULL,
                status VARCHAR(50) NOT NULL DEFAULT 'disponible'
            );
        `);

        await pool.query(`
            CREATE TABLE Reservations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                id_utilisateur INT,
                id_terrain INT,
                date_heure DATETIME NOT NULL,
                FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id),
                FOREIGN KEY (id_terrain) REFERENCES Terrains(id)
            );
        `);

        console.log("Les tables ont été créées.");
    } catch (error) {
        console.error("Erreur lors de la création des tables :", error);
    }
};

createTables();
