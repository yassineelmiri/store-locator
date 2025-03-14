# Store Locator  

![image](https://github.com/user-attachments/assets/a3b3cbb4-e9d8-44a4-8cad-bf09350ca15b)


🚀 **Store Locator** est une application web permettant d'ajouter et de localiser des magasins sur une carte interactive, sans backend.  

🔗 **Démo en ligne** : [Store Locator](https://store-locator-three.vercel.app/)  
📂 **Dépôt GitHub** : [store-locator](https://github.com/yassineelmiri/store-locator)  

## 📌 Fonctionnalités  

✅ Ajouter un magasin avec :  
- Nom  
- Ville  
- Localisation (Latitude & Longitude)  
- Code postal  
- Services proposés  

✅ Afficher tous les magasins sur une carte interactive.  
✅ Rechercher des magasins par **nom, ville ou code postal**.  
✅ Centrer la carte sur une ville ou un code postal recherché.  
✅ Stocker les magasins localement avec **localStorage** (les données restent après un rechargement).  

## 🎨 Technologies Utilisées  

- **React.js** – Framework frontend  
- **Leaflet.js** – API de cartographie basée sur OpenStreetMap  
- **localStorage** – Stockage local des magasins  
- **Tailwind CSS** – Stylisation et responsive design  

## 🚀 Installation & Exécution  

1️⃣ **Cloner le projet**  
```sh
git clone https://github.com/yassineelmiri/store-locator.git
cd store-locator
```
  
2️⃣ **Installer les dépendances**  
```sh
npm install
```

3️⃣ **Lancer le serveur local**  
```sh
npm run dev
```

L'application sera disponible sur `http://localhost:5173/`  

## 📦 Structure du Projet  

```
store-locator/
│── src/
│   ├── components/    # Composants React (Formulaire, Carte, Barre de Recherche)
│   ├── assets/        # Images et logos
│   ├── types.ts       # Définition des types TypeScript
│   ├── App.tsx        # Composant principal de l'application
│   ├── main.tsx       # Point d'entrée de l'application
│   ├── index.css      # Fichier de styles globaux
│── public/            # Fichiers statiques
│── package.json       # Dépendances et scripts
│── tailwind.config.js # Configuration de Tailwind CSS
│── tsconfig.json      # Configuration TypeScript
│── vite.config.ts     # Configuration de Vite
```

## 🎯 Améliorations Futures  

🔹 Modifier ou supprimer des magasins  
🔹 Personnaliser les marqueurs sur la carte  
🔹 Améliorer l’interface utilisateur  

## ✨ Encadre Par   

👤 **Marouane FAGRI** 
 
📧 Contact : miriyassine123@gmail.com  
