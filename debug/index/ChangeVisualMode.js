const storageKey = 'theme-preference';
      
const savedTheme = localStorage.getItem(storageKey);
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Apply the correct theme
document.documentElement.setAttribute('data-theme', initialTheme);

// The toggle button element
const toggleButton = document.getElementById('themetoggle');
    
// The <html> element where the dark mode class is applied
const htmlElement = document.documentElement;

// Grab the labels from the data attributes
const lightLabel = toggleButton.getAttribute('data-light-label');
const darkLabel = toggleButton.getAttribute('data-dark-label');

// Apply the correct button icon based on the theme set in head
const currentTheme = htmlElement.getAttribute('data-theme');
if (lightLabel && darkLabel) {
  toggleButton.innerHTML = currentTheme === 'dark' ? darkLabel : lightLabel;
}
      
// Listen for whenever a user clicks the button to swap themes
toggleButton.addEventListener('click', () => {
    console.log("mode clicked");
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
  applyTheme(newTheme);
  localStorage.setItem(storageKey, newTheme);
});
      
// Function to update the HTML attribute and change the button's label
function applyTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
      
  if (lightLabel && darkLabel) {
    toggleButton.innerHTML = theme === 'dark' ? darkLabel : lightLabel;
    }
}