document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputs = document.querySelectorAll("input[type='file']");
    let allFilesSelected = true;
    let fileList = document.getElementById("fileList");
    fileList.innerHTML = "<h3>Uploaded Files:</h3>";

    inputs.forEach(input => {
        if (!input.files.length) {
            allFilesSelected = false;
        } else {
            let fileName = document.createElement("p");
            fileName.textContent = input.files[0].name;
            fileList.appendChild(fileName);
        }
    });

    if (allFilesSelected) {
        alert("All 6 documents uploaded successfully!");
    } else {
        alert("Please upload all 6 required documents.");
    }
});
