document.addEventListener('DOMContentLoaded', () => {
    const milesInput = document.getElementById('milesInput');
    const activityType = document.getElementById('activityType');
    const calculateStepsButton = document.getElementById('calculateSteps');
    const calculatedStepsDisplay = document.getElementById('calculatedSteps');

    const calorieInput = document.getElementById('calorieInput');
    const addCaloriesButton = document.getElementById('addCalories');
    const totalCaloriesDisplay = document.getElementById('totalCalories');

    let totalSteps = 0;
    let totalCalories = 0;

    const stepsPerMile = {
        walk: 2500,
        run: 2000,
        jog: 2250
    };

    calculateStepsButton.addEventListener('click', () => {
        const miles = parseFloat(milesInput.value);
        const activity = activityType.value;

        if (isNaN(miles) || miles <= 0) {
            alert('Please enter a valid number of miles.');
            return;
        }

        const steps = miles * stepsPerMile[activity];
        totalSteps += steps;
        calculatedStepsDisplay.textContent = totalSteps.toLocaleString();
    });

    addCaloriesButton.addEventListener('click', () => {
        const calories = parseFloat(calorieInput.value);

        if (isNaN(calories) || calories <= 0) {
            alert('Please enter a valid number of calories.');
            return;
        }

        totalCalories += calories;
        totalCaloriesDisplay.textContent = totalCalories.toLocaleString();
        calorieInput.value = '';
    });
});
