
// Get references to DOM elements
const button = document.getElementById("submitBtn");
const boxes = document.getElementsByClassName("box");
const compareBtn = document.getElementById("compareBtn");
const selectedBoxes = document.getElementsByClassName("boxSelected");

// Add event listener for the submit button
button.addEventListener("click", function(event) {
    // Get the value from the input and trim whitespace
    const inputValue = document.getElementById("foodChoice").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Check if input is empty and display an error message if needed
    if (inputValue === "") {
        event.preventDefault();
        errorMessage.innerHTML = "Please enter something";
    } else {
        errorMessage.innerHTML = "";
    }
});

// Add click event listeners to the boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        // Toggle the 'boxSelected' class on click
        if (this.classList.contains("boxSelected")) {
            this.classList.remove("boxSelected");
        } else {
            this.classList.add("boxSelected");
        }
    });
}

// Add event listener for the compare button
compareBtn.addEventListener("click", function() {
    // Create an object to store calculated nutrition values
    const calculatedNutritionList = {
        // individual nutrition categories with initial values
        calories: { categoryName: "Most calories", value: 0, item: null },
        fat_total_g: { categoryName: "Most Fats", value: 0, item: null },
        fat_saturated_g: { categoryName: "Least Saturated Fats", value: 1000, item: null },
        protein_g: { categoryName: "Most Protein", value: 0, item: null },
        sodium_mg: { categoryName: "Least Sodium", value: 1000, item: null },
        potassium_mg: { categoryName: "Most Potassium", value: 0, item: null },
        cholesterol_mg: { categoryName: "Least Cholesterol", value: 1000, item: null },
        carbohydrates_total_g: { categoryName: "Least Carbohydrates", value: 1000, item: null },
        fiber_g: { categoryName: "Most Fibers", value: 0, item: null },
        sugar_g: { categoryName: "Least Sugar", value: 1000, item: null }
    };

    // Get the table body for comparison results
    const comparisonTableBody = document.querySelector("#comparisonTable tbody");

    // Loop through selected boxes to calculate nutrition values
    for (let i = 0; i < selectedBoxes.length; i++) {
        const itemFacts = JSON.parse(selectedBoxes[i].getAttribute("itemFacts"));

        // Compare nutrition values and update calculatedNutritionList
        for (const key in calculatedNutritionList) {
            if (key !== "fat_saturated_g" && key !== "sodium_mg" && key !== "cholesterol_mg" && key !== "carbohydrates_total_g" && key !== "sugar_g") {
                if (itemFacts[key] > calculatedNutritionList[key].value) {
                    calculatedNutritionList[key].value = itemFacts[key];
                    calculatedNutritionList[key].item = itemFacts.name;
                }
            } else {
                if (itemFacts[key] < calculatedNutritionList[key].value) {
                    calculatedNutritionList[key].value = itemFacts[key];
                    calculatedNutritionList[key].item = itemFacts.name;
                }
            }
        }
    }

    // Clear existing table rows in the comparison table
    while (comparisonTableBody.firstChild) {
        comparisonTableBody.removeChild(comparisonTableBody.firstChild);
    }

    // Populate the comparison table with calculated nutrition values
    for (const key in calculatedNutritionList) {
        if (calculatedNutritionList[key].item !== null) {
            const newRow = comparisonTableBody.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            cell1.textContent = calculatedNutritionList[key].categoryName;
            cell2.textContent = calculatedNutritionList[key].item;
            cell3.textContent = calculatedNutritionList[key].value;
        }
    }
});
