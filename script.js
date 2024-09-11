
document.getElementById("flipButton").addEventListener("click", function() {
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");
    
    coin.classList.add("flipping");
    
    setTimeout(function() {
        const random = Math.random();
        const outcome = random < 0.5 ? "Pile" : "Face";
        
        result.textContent = "Résultat : " + outcome;
        coin.classList.remove("flipping");
        
        // Met à jour le visuel de la pièce
        coin.textContent = outcome;
    }, 1000);
});
