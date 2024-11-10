document.getElementById("meal-plan-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let goal = document.getElementById("goal").value;
    let diet = document.getElementById("diet").value;
    if (!age || !weight || !goal || !diet) {
        alert("Please fill out all fields!");
        return;
    }

    generateMealPlan(age, weight, goal, diet);
});

function generateMealPlan(age, weight, goal, diet) {
    let mealPlan = {
        "weight_loss": {
            breakfast: "Oatmeal with berries and almonds",
            lunch: "Grilled chicken salad with olive oil dressing",
            dinner: "Baked salmon with steamed broccoli",
            snack: "Apple slices with peanut butter"
        },
        "health_maintenance": {
            breakfast: "Greek yogurt with granola and honey",
            lunch: "Quinoa salad with avocado and chickpeas",
            dinner: "Stir-fried tofu with vegetables and brown rice",
            snack: "Carrot sticks with hummus"
        },
        "build_muscle": {
            breakfast: "Scrambled eggs with spinach and whole grain toast",
            lunch: "Chicken breast with quinoa and steamed vegetables",
            dinner: "Beef stir-fry with bell peppers and brown rice",
            snack: "Protein shake with banana"
        }
    };

    let selectedPlan = mealPlan[goal];

    let mealPlanDetails = `
        <p><strong>Breakfast:</strong> ${selectedPlan.breakfast}</p>
        <p><strong>Lunch:</strong> ${selectedPlan.lunch}</p>
        <p><strong>Dinner:</strong> ${selectedPlan.dinner}</p>
        <p><strong>Snack:</strong> ${selectedPlan.snack}</p>
    `;

    document.getElementById("meal-plan-details").innerHTML = mealPlanDetails;
    document.getElementById("meal-plan-output").style.display = "block";
}
