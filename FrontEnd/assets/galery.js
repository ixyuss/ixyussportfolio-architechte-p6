// Sélectionnez l'élément de la galerie
const gallery = document.querySelector('.gallery');

// Fonction pour récupérer les travaux et les afficher
fetch('http://localhost:5678/api/works')
    .then(response => response.json())  // Transformez la réponse en JSON
    .then(works => {
        // Parcourez chaque travail pour l'ajouter dynamiquement à la galerie
        works.forEach(work => {
            // Créez les éléments pour chaque travail
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const caption = document.createElement('figcaption');

            // Configurez les attributs de l'image et du titre
            img.src = work.imageUrl;
            img.alt = work.title;
            caption.textContent = work.title;

            // Ajoutez l'image et le titre dans le conteneur figure
            figure.appendChild(img);
            figure.appendChild(caption);

            // Ajoutez le conteneur figure à la galerie
            gallery.appendChild(figure);
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des travaux :', error));
