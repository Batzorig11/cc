// lib/auth.js

// Get all registered users
export function getUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users;
}

// Save all users back to storage
export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Create a new user
export function registerUser(email, password) {
  const users = getUsers();

  // Check if already exists
  if (users.some((u) => u.email === email)) {
    return { success: false, message: "User already exists" };
  }

  const newUser = {
    email,
    password,
    examDate: null,
    daysRemaining: 0,
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true };
}

// Log in user
export function loginUser(email, password) {
  const users = getUsers();
  const found = users.find((u) => u.email === email && u.password === password);

  if (!found) {
    return { success: false, message: "Invalid credentials" };
  }

  // Save logged in user
  localStorage.setItem("loggedInUser", JSON.stringify(found));
  return { success: true, user: found };
}

// Get logged in user
export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

// Update logged in user safely
export function updateLoggedInUser(data) {
  const user = getLoggedInUser();
  if (!user) return;

  const updated = { ...user, ...data };
  localStorage.setItem("loggedInUser", JSON.stringify(updated));

  // ALSO update the user in the users[] list
  const users = getUsers();
  const index = users.findIndex((u) => u.email === updated.email);
  if (index !== -1) {
    users[index] = updated;
    saveUsers(users);
  }

  return updated;
}

// Logout
export function logoutUser() {
  localStorage.removeItem("loggedInUser");
}
