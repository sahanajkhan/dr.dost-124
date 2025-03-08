document.getElementById("doctorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let specialization = document.getElementById("specialization").value;
    let licenseNumber = document.getElementById("licenseNumber").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let hospital = document.getElementById("hospital").value.trim();
    let documentFile = document.getElementById("document").files[0];
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Basic Validation
    if (!fullName || !email || !phone || !specialization || !licenseNumber || !experience || !hospital || !documentFile || !password || !confirmPassword) {
        alert("Please fill in all fields and upload a document.");
        return;
    }

    // Validate Phone Number (basic)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate Experience (positive number)
    if (experience <= 0) {
        alert("Experience should be a positive number.");
        return;
    }

    

   
    
    

    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Show Success Message
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<strong>Registration Successful!</strong><br>
                           Name: ${fullName}<br>
                           Email: ${email}<br>
                           Phone: ${phone}<br>
                           Specialization: ${specialization}<br>
                           License No: ${licenseNumber}<br>
                           Experience: ${experience} years<br>
                           Hospital: ${hospital}<br>
                           Uploaded Document: ${documentFile.name}`;
    resultDiv.classList.remove("hidden");
});

// Show Uploaded File Name
document.getElementById("document").addEventListener("change", function() {
    let fileName = this.files[0] ? this.files[0].name : "No file chosen";
    document.getElementById("file-name").textContent = fileName;
});
