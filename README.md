# book-app-api

Une API RESTful permettant aux utilisateurs de gérer une bibliothèque de livres avec des fonctionnalités CRUD et une authentification sécurisée via JWT.

# Fonctionnalités  

-  **CRUD Livres** : Ajouter, modifier, supprimer et afficher les livres  
-  **CRUD Auteurs** : Gérer les auteurs associés aux livres  
-  **Authentification** : Inscription et connexion des utilisateurs avec JWT  
-  **Sécurisation** : Certaines routes sont protégées par une authentification  

---

# Cloner le projet
```bash
git clone git@github.com:Delphine2411/book-app-api.git
cd book-app-api

# Installation des indépendances
 npm install
Express jsonwebtoken bcrypt mongosse

# configuration
création de fichier .env dans lequel se trouve le code suivant:
MONGO_URI = mongodb+srv://kpankpand:CU7MSlWMTlyTFUet@cluster0.87grh.mongodb.net/book
JWT_SECRET = supersecretjwt
PORT = 5000

# Demarer le server
node server.js
API disponible sur: http://localhost:5000

# Les routes de l'API

   # Authentification
POST	/api/register	//*Inscription d’un utilisateur*
POST	/api/login	//*Connexion et récupération d’un token*

   # Livres
   Méthode	Route	Description
GET	/api/books	Récupérer tous les livres
POST	/api/books	Ajouter un livre ( JWT)
GET	/api/books/:id	Afficher un livre
PUT	/api/books/:id	Modifier un livre ( JWT)
DELETE	/api/books/:id	Supprimer un livre ( JWT)

    # Auteurs
GET	/api/authors	Récupérer tous les auteurs
POST	/api/authors	Ajouter un auteur ( JWT)
PUT	/api/authors/:id	Modifier un auteur ( JWT)
DELETE	/api/authors/:id	Supprimer un auteur ( JWT)    

#Technologies utilisées

Node.js pour le backend
Express.js pour les routes
MongoDB pour la base de données
Mongoose pour la gestion des données
JWT pour l'authentification
Postman  pour tester les requêtes

# Exécution
Tester avec Postman
1 Ouvrir Postman
2 Envoyer des requêtes à l’API, par exemple :

Inscription : POST http://localhost:5000/api/register

Connexion : POST http://localhost:5000/api/login

Obtenir la liste des livres : GET http://localhost:5000/api/books