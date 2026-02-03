document.getElementById("certificateSelect").addEventListener("change", function() {
    const selectedOption = this.options[this.selectedIndex];
    const selectedFile = selectedOption.value;
    
    const placeholder = document.getElementById("contentPlaceholder");
    const content = document.getElementById("certificateContent");
    const viewer = document.getElementById("certificateViewer");
    const downloadLink = document.getElementById("downloadLink");
    const title = document.getElementById("certificateTitle");
    const details = document.getElementById("certificateDetails");

    if (selectedFile) {
        // Show content area, hide placeholder
        placeholder.style.display = "none";
        content.style.display = "block";

        // Update Metadata
        const issuer = selectedOption.getAttribute("data-issuer") || "Ismeretlen kiállító";
        const date = selectedOption.getAttribute("data-date") || "N/A";
        const verification = selectedOption.getAttribute("data-verification") || "#";

        title.textContent = selectedOption.text;
        details.innerHTML = `<strong>Kiállító:</strong> ${issuer} | <strong>Dátum:</strong> ${date} | <a href="${verification}" target="_blank" class="text-decoration-none">Hitelesség ellenőrzése &rarr;</a>`;
        
        downloadLink.href = selectedFile;

        // Handle File Type (Image vs PDF)
        const isPDF = selectedFile.toLowerCase().endsWith('.pdf');
        
        if (isPDF) {
            viewer.innerHTML = `<iframe src="${selectedFile}" width="100%" height="600px" style="border:none;"></iframe>`;
        } else {
            viewer.innerHTML = `<img src="${selectedFile}" id="certificateImage" class="img-fluid" alt="Oklevél" style="max-height: 700px;">`;
        }

    } else {
        placeholder.style.display = "block";
        content.style.display = "none";
    }
});
