const ajouterBouton = document.getElementById("ajouter");
    const liste = document.getElementById("liste");
    const inputTache = document.getElementById("tache");

    ajouterBouton.addEventListener("click", function() {
      const tacheTexte = inputTache.value;

      if (tacheTexte === "") {
        alert("Veuillez entrer une tâche.");
        return;
      }

      const nouvelleTache = document.createElement("li");
      
      // Div pour le texte de la tâche
      const taskTextDiv = document.createElement("div");
      taskTextDiv.classList.add("task-text");
      taskTextDiv.textContent = tacheTexte;

      const boutonTerminer = document.createElement("button");
      boutonTerminer.textContent = "Terminé";
      boutonTerminer.addEventListener("click", function() {
        nouvelleTache.classList.toggle("completed");
      });

      const boutonSupprimer = document.createElement("button");
      boutonSupprimer.textContent = "Supprimer";
      boutonSupprimer.addEventListener("click", function() {
        liste.removeChild(nouvelleTache);
      });

      // Ajout des éléments à la tâche
      nouvelleTache.appendChild(taskTextDiv);
      nouvelleTache.appendChild(boutonTerminer);
      nouvelleTache.appendChild(boutonSupprimer);

      liste.appendChild(nouvelleTache);
      inputTache.value = "";  // Réinitialiser l'input
    });