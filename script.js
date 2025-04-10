// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
 });
 

 // Skill Form Handling
 const skillForm = document.getElementById('skillForm');
 const skillNameInput = document.getElementById('skillName');
 const skillCategorySelect = document.getElementById('skillCategory');
 const skillRatingInput = document.getElementById('skillRating');
 const skillListContainer = document.getElementById('skillList');
 const completionDateInput = document.getElementById('completionDate');
 

 // Stats Display
 const totalSkillsElement = document.getElementById('totalSkills');
 const averageRatingElement = document.getElementById('averageRating');
 

 // Notifications
 const notificationsContainer = document.getElementById('notifications');
 

 let skills = [];
 

 // Load skills from localStorage on page load
 document.addEventListener('DOMContentLoaded', () => {
  const storedSkills = localStorage.getItem('skills');
  if (storedSkills) {
  skills = JSON.parse(storedSkills);
  renderSkills();
  updateStats();
  }
 });
 

 skillForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  const skillName = skillNameInput.value.trim();
  const skillCategory = skillCategorySelect.value;
  const skillRating = parseInt(skillRatingInput.value);
  const proficiency = document.querySelector('input[name="proficiency"]:checked').value;
  const completionDate = completionDateInput.value;
 

  // Form Validation
  if (!skillName) {
  showNotification('Skill name is required.', 'error');
  skillNameInput.classList.add('is-invalid');
  return;
  } else {
  skillNameInput.classList.remove('is-invalid');
  }
 

  if (isNaN(skillRating) || skillRating < 1 || skillRating > 5) {
  showNotification('Rating must be between 1 and 5.', 'error');
  skillRatingInput.classList.add('is-invalid');
  return;
  } else {
  skillRatingInput.classList.remove('is-invalid');
  }
 

  const newSkill = {
  id: Date.now(),
  name: skillName,
  category: skillCategory,
  rating: skillRating,
  proficiency: proficiency,
  completionDate: completionDate
  };
 

  skills.push(newSkill);
  saveSkillsToLocalStorage();
  renderSkills();
  updateStats();
  showNotification('Skill added successfully!');
 

  // Reset form fields
  skillForm.reset();
 });
 

 function renderSkills() {
  skillListContainer.innerHTML = '';
 

  skills.forEach(skill => {
  const skillCard = document.createElement('div');
  skillCard.classList.add('skill-card', 'col-md-6'); // Bootstrap grid classes
  skillCard.innerHTML = `
  <h3>${skill.name}</h3>
  <p>Category: ${skill.category}</p>
  <p>Rating: ${skill.rating}/5</p>
  <p>Proficiency: ${skill.proficiency}</p>
  <p>Completion Date: ${skill.completionDate || 'Not specified'}</p>
  <button class="btn btn-danger btn-sm" onclick="deleteSkill(${skill.id})">Delete</button>
  `;
  skillListContainer.appendChild(skillCard);
  });
 }
 

 function deleteSkill(id) {
  skills = skills.filter(skill => skill.id !== id);
  saveSkillsToLocalStorage();
  renderSkills();
  updateStats();
  showNotification('Skill deleted.');
 }
 

 function updateStats() {
  totalSkillsElement.textContent = skills.length;
 

  if (skills.length > 0) {
  const totalRating = skills.reduce((sum, skill) => sum + skill.rating, 0);
  const average = totalRating / skills.length;
  averageRatingElement.textContent = average.toFixed(1);
  } else {
  averageRatingElement.textContent = '0';
  }
 }
 

 function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
 

  if (type === 'error') {
  notification.classList.add('error');
  }
 

  notificationsContainer.appendChild(notification);
 

  setTimeout(() => {
  notification.remove();
  }, 3000);
 }
 

 function saveSkillsToLocalStorage() {
  localStorage.setItem('skills', JSON.stringify(skills));
 }
 

 // Example usage of primitive types, type conversion, coercion, and template literals
 const skillCount = skills.length;
 const message = `You have ${skillCount} skills.`;
 console.log(message);
 

 let ratingString = "4";
 let ratingNumber = parseInt(ratingString); // Type conversion from string to number
 console.log(ratingNumber + 1); // Outputs 5
 

 // Example usage of control flow statements
 const userRole = "admin";
 if (userRole === "admin") {
  console.log("Access granted.");
 } else {
  console.log("Access denied.");
 }
 

 // Example usage of try...catch for error handling
 try {
  // Code that might throw an error
  if (skills.length === 0) {
  throw new Error("No skills available.");
  }
 } catch (error) {
  console.error("Error:", error.message);
 }