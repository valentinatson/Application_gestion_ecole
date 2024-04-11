const dataBase = require("../config/mysql");
const jwt = require('jsonwebtoken');

// Fonction pour décoder le token et récupérer l'ID de l'utilisateur
function decodeToken(token) {
    try {
        // Votre clé secrète utilisée pour signer les tokens
        const secretKey = '12345678';
        
        // Décoder le token
        const decoded = jwt.verify(token, secretKey);
        
        // Récupérer l'ID de l'utilisateur depuis le token décodé
        const userId = decoded.userId;
        
        return userId;
    } catch (error) {
        // En cas d'erreur lors du décodage du token
        console.error('Erreur lors du décodage du token :', error);
        return null;
    }
}

// Fonction pour afficher le profil de l'utilisateur connecté
exports.profileView = (req, res) => {
    // Récupérer le token JWT depuis les en-têtes de la requête
    const token = req.headers["authorization"].split(" ")[1];
    
    // Décoder le token pour obtenir l'ID de l'utilisateur
    const userId = decodeToken(token);
    
    // Vérifier si l'ID de l'utilisateur a été récupéré avec succès
    if (userId) {
        // Utiliser l'ID de l'utilisateur pour récupérer ses informations depuis la base de données
        dataBase.query("SELECT * FROM users WHERE id_user = ?", [userId], (error, result) => {
            if (error) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
                res.status(500).json({ error: 'Erreur lors de la récupération des informations de l\'utilisateur' });
            } else {
                // Envoyer les informations de l'utilisateur en réponse
                res.status(200).json({ utilisateur: result[0] });
            }
        });
    } else {
        // Si l'ID de l'utilisateur n'a pas pu être récupéré à partir du token
        res.status(401).json({ error: 'Token invalide ou expiré' });
    }
};
