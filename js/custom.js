
function showForm(category) {
    // Prompt the user to enter their name
    var name = prompt("Please Enter Your Name:");
    
    // If the user enters a name
    if (name != null) {
        // Prompt the user to enter their email
        var email = prompt("Which Team are you on:");

        // Create a dropdown box for selecting technicians
        var technician = prompt("Who do you want to assign this ticket to? Choose a technician from the list: \n1. Evie  \n2. Madison  \n3. Daven \n4. Div \n5. James ");
        
        // If the user selects a technician
        if (technician != null) {
            // Set the entered name in the "name" input field of the form
            document.getElementById("name").value = name;
            
            // Set the entered email in the "email" input field of the form
            document.getElementById("email").value = email;

            // Set the selected technician in the "technician" input field of the form
            document.getElementById("technician").value = technician;

            // For example, you can set the category in a hidden input field
            document.getElementById("category").value = category;
            
            // Display the form container
            document.getElementById("formContainer").style.display = "block";
            
            // Show the message "KM will get back to you"
            document.getElementById("message").innerText = "KM will get back to you";

        }
    }
}







