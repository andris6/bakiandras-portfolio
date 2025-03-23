document.getElementById("certificateSelect").addEventListener("change", function() {
    let selectedFile = this.value;
    let viewer = document.getElementById("certificateViewer");
    let downloadLink = document.getElementById("downloadLink");

    if (selectedFile) {
        viewer.src = selectedFile;
        downloadLink.href = selectedFile;
        downloadLink.style.display = "inline-block";
    } else {
        viewer.src = "";
        downloadLink.style.display = "none";
    }
});
