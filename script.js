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
  
  async function fetchPosts() {
    const user = supabase.auth.user();
    if (!user) {
      document.getElementById("posts-container").innerHTML = "<p>Please log in to view your posts.</p>";
      return;
    }
  
    const { data, error } = await supabase.from("posts").select("*").eq("user_id", user.id);
    if (error) {
      console.error("Error fetching posts:", error.message);
      document.getElementById("posts-container").innerHTML = "<p>Error loading posts.</p>";
    } else {
      const postsHtml = data.map(post => `
        <div>
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `).join("");
      document.getElementById("posts-container").innerHTML = postsHtml;
    }
  }
  
  // Call fetchPosts() after user logs in
  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      fetchPosts();
    }
  });