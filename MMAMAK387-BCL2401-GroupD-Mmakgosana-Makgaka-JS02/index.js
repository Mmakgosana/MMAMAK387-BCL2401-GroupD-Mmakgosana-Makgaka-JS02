const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);
// Function to add a new goal to the list
const addNewGoal = () => {
    // Get the value of the input field where the goal is entered
    const goalInput = document.querySelector('#goalInput').value;

    // Get the reference to the list where goals will be displayed
    const goalList = document.querySelector('#goalList');

    // Retrieve all existing goals
    const existingGoals = goalList.querySelectorAll('li');

    //Check for duplicates
    for (let goal of existingGoals) {
        if (goal.textContent === goalInput) {
            //Display alert for duplicate goal
            alert('This goal already exists!');
            // Exit function to prevent adding duplicate goal
            return;
        }
        
    }


    // If no duplicate is found, proceed to add the new goal

    //Create a new list item element to represent the new goal
const newGoal = document.createElement('li');
    // This is to set the text content of the new list item to the entered goal
newGoal.textContent = goalInput;
// This is to append the new list item to the goal list
goalList.appendChild(newGoal);
};



// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
