function savePoem() {
    const text = document.getElementById("poemText").value;
    if (!text) {
      alert("Please enter your poem before saving!");
      return;
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my_poem.txt";
    document.body.appendChild(link);  // Required for Firefox
    link.click();
    document.body.removeChild(link);  // Clean up
    URL.revokeObjectURL(url);
  }