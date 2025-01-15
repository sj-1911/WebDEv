document.addEventListener('DOMContentLoaded', () => {
    const activityInput = document.getElementById('activityInput');
    const addActivityButton = document.getElementById('addActivity');
    const activityList = document.getElementById('activityList');

    // Function to add a new activity to the list
    addActivityButton.addEventListener('click', () => {
        const activity = activityInput.value.trim();

        if (activity) {
            const listItem = document.createElement('li');
            listItem.textContent = activity;

            // Add click event to remove the activity when clicked
            listItem.addEventListener('click', () => {
                activityList.removeChild(listItem);
            });

            activityList.appendChild(listItem);
            activityInput.value = '';
        } else {
            alert('Please enter an activity before adding.');
        }
    });
});
