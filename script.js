document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  // Dummy check (no real database)
  if (email === "admin@example.com" && password === "password123") {
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").textContent = "Invalid credentials!";
  }
});
