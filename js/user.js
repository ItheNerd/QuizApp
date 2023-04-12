// Get the username from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

// If the username is not present, redirect to the login page
if (!username) {
  window.location.href = "login.html";
}

// Set the text of the button to the username
const usernameBtn = document.getElementById("username_btn");
if (username) {
  usernameBtn.textContent = `Hello, ${username}`;
}

// Add event listener to the username button to sign out
usernameBtn.addEventListener("click", () => {
  // Clear the username from the URL query string
  const url = new URL(window.location.href);
  url.searchParams.delete("username");
  window.location.href = url.toString();
});
