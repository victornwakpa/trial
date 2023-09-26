// Function to filter cards based on user input
function filterCards() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".grid-item");
  
    cards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
  
      // Check if the card's text contains the search input
      if (cardText.includes(input)) {
        card.style.display = "block"; // Show the card
      } else {
        card.style.display = "none"; // Hide the card
      }
    });
  }
  
// Attach an event listener to the input field
document.getElementById("searchInput").addEventListener("input", filterCards);
  

// Function to filter and display the selected number of items
function filterItems() {
    const select = document.getElementById("selectNumber");
    const selectedValue = select.value;
    const cards = document.querySelectorAll(".grid-item");
  
    cards.forEach((card, index) => {
      if (selectedValue === "all" || index < selectedValue) {
        card.style.display = "block"; // Show the card
      } else {
        card.style.display = "none"; // Hide the card
      }
    });
  }
  
  // Attach an event listener to the select element
  document.getElementById("selectNumber").addEventListener("change", filterItems);
  