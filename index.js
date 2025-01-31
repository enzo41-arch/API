const express = require('express');
const app = express();
const port = 3000;

//middleware d'analyse du JSON les requetes
app.use(express.json());

let produits = [
    { id: 1, nom: 'Thé Vert Matcha', prix: 12.99, quantite: 10 },
    { id: 2, nom: 'Café Arabica', prix: 8.99, quantite: 20 },
];

//Routes
// GET /produits
app.get('/produits', (req, res) => {
    res.json(produits);
});

// POST
app.post('/produits', (req, res) => {
    produits.push(newProduit);
});

// PUT /produits id
app.put('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduit = req.body;
    const index = produits.findIndex(produit => produit.id === id);
    if (index !== -1) {
        produits[index] = updatedProduit;
        res.json(updatedProduit);
    } else {
        res.status(404).send('Produit non trouvé');
    }
});

// DELETE /produits id
app.delete('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produits.findIndex(produit => produit.id === id);
    if (index !== -1) {
        produits.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Produit non trouvé');
    }
});


//Démarrage serveur
app.listen(port,() => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
})
