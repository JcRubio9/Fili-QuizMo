// Navigate to sectionId by toggling 'active' class on <section> elements
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.classList.toggle("active", section.id === sectionId);
  });
}

// Navigate back to Home
function goHome() {
  showSection('home');
}

// For keyboard accessibility on feature cards
function handleKeyPress(event, sectionId) {
  if(event.key === 'Enter' || event.key === ' ') {
    showSection(sectionId);
    event.preventDefault();
  }
}

// Example email verification button functions
function emailVerification() {
  alert('Email verification initiated.');
}

function emailVerified() {
  alert('Email successfully verified.');
}

// Login as Admin - simple simulation
function loginAdmin() {
  const username = document.getElementById('username').value.trim();
  if(username === '') {
    alert('Please enter your username to login as Admin.');
    return;
  }
  alert('Logged in as Admin: ' + username);
  showSection('admin');
}

// Login as Teacher - simple simulation
function loginTeacher() {
  const username = document.getElementById('username').value.trim();
  if(username === '') {
    alert('Please enter your username to login as Teacher.');
    return;
  }
  alert('Logged in as Teacher: ' + username);
  showSection('teacher');
}

// Simulated app download button function
function downloadApp() {
  alert('Downloading Fili-QuizMo app...');
  // Here you can implement actual download logic or redirect
}

// Logout and return to home
function logout() {
  alert('Logging out successful.');
  goHome();
}

// Initialize to home when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  goHome();
});