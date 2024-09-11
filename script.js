
let pileCount = 0;
let faceCount = 0;

document.getElementById("flipButton").addEventListener("click", function() {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");

    coin.classList.add("flipping");

    setTimeout(function() {
        const random = Math.random();
        const outcome = random < 0.5 ? "Pile" : "Face";

        // Met à jour le texte de la pièce et le résultat
        result.textContent = "Résultat : " + outcome;
        coin.textContent = outcome;
        coin.classList.remove("flipping");

        // Met à jour les statistiques
        if (outcome === "Pile") {
            pileCount++;
        } else {
            faceCount++;
        }

        updateStatistics();
    }, 1500); // Attendre 1.5 secondes pour la rotation plus lente
});

function updateStatistics() {
    const total = pileCount + faceCount;

    // Mettre à jour les valeurs dans le tableau
    document.getElementById("pileCount").textContent = pileCount;
    document.getElementById("faceCount").textContent = faceCount;

    // Calcul des pourcentages
    const pilePercentage = ((pileCount / total) * 100).toFixed(2) + "%";
    const facePercentage = ((faceCount / total) * 100).toFixed(2) + "%";

    document.getElementById("pilePercentage").textContent = pilePercentage;
    document.getElementById("facePercentage").textContent = facePercentage;
}
