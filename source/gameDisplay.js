      // JavaScript to handle the show/hide behavior
      document.addEventListener("DOMContentLoaded", () => {
        const startGameButton = document.getElementById("startGameButton");
        const mainContent = document.getElementById("main-content");
        const gameView = document.getElementById("gameView");

        startGameButton.addEventListener("click", () => {
          // Hide the header when the "Start Game" button is clicked
          document.querySelector("header").style.display = "none";
          // Show the main content and the game view
          mainContent.style.display = "block";
          gameView.style.display = "block";
        });
      });