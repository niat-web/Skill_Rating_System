# Skill_Rating_System

## Objective
This JavaScript project provides a user interface for tracking and rating skills. It allows users to add skills with names, categories, ratings (1-5), proficiency levels, and completion dates. The application stores skills in local storage, displays them in a list, calculates and displays total skills and average rating, and provides notifications for user actions. The core technologies used are HTML, CSS (implied), and JavaScript for DOM manipulation, event handling, local storage interaction, and basic form validation.

## Output
<iframe src="https://niat-web.github.io/Skill_Rating_System/" height="1000" width="300" title="Skill_Rating_System"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Add new skills with name, category, rating, proficiency, and completion date.
- Display skills in a list format with details.
- Calculate and display the total number of skills.

## UI Enhancements
- Implement dark mode/light mode toggle.
- Display user-friendly notifications for successful actions and errors.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement form validation | Ensure required fields are filled and rating is within the valid range (1-5). |
| Save skills to local storage | Skills persist across browser sessions. |
| Display skills in a card format | Skills are rendered as visually appealing cards with relevant information. |
| Implement skill deletion | Users can remove skills from the list. |
| Calculate average rating | The average skill rating is accurately calculated and displayed. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically update the HTML content (adding/removing skill cards, updating stats). |
| Event Listeners | Used to handle form submission, dark mode toggle click, and DOMContentLoaded event. |
| Local Storage | Used to store and retrieve skill data, persisting data between sessions. |
| Arrays | Used to store skill objects and perform operations like adding, deleting, and filtering. |
| Functions | Used to modularize code into reusable blocks for rendering skills, updating stats, showing notifications, etc. |
| Template Literals | Used to create dynamic HTML strings for skill cards. |
| Type Conversion | Used to convert rating string to a number using `parseInt` for calculations. |
| Control Flow | Used `if/else` statements to manage user role access. |
| Error Handling | Used `try...catch` blocks to handle potential errors. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Local Storage API | `localStorage.setItem()`, `localStorage.getItem()` | Used to store and retrieve skill data in the browser's local storage. |
