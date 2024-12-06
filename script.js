// Handle Form Submission
document.getElementById("message-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    // Insert data into Supabase
    const { data, error } = await supabase.from("your-table").insert([{ name, message }]);
    if (error) {
      console.error("Error submitting data:", error.message);
      alert("There was an error. Please try again.");
    } else {
      alert("Message submitted successfully!");
      document.getElementById("message-form").reset(); // Clear the form
    }
  });
  
