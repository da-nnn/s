document.addEventListener('DOMContentLoaded', function() {
  const calculatorLink = document.getElementById('calculator-link');
  const portfolioLink = document.getElementById('portfolio-link');
  const reminderLink = document.getElementById('reminder-link');

  const homeSection = document.getElementById('home');
  const calculatorSection = document.getElementById('calculator');
  const portfolioSection = document.getElementById('portfolio');
  const reminderSection = document.getElementById('reminder');

  calculatorLink.addEventListener('click', function() {
    homeSection.classList.add('hidden');
    calculatorSection.classList.remove('hidden');
    portfolioSection.classList.add('hidden');
    reminderSection.classList.add('hidden');
  });

  portfolioLink.addEventListener('click', function() {
    homeSection.classList.add('hidden');
    calculatorSection.classList.add('hidden');
    portfolioSection.classList.remove('hidden');
    reminderSection.classList.add('hidden');
  });

  reminderLink.addEventListener('click', function() {
    homeSection.classList.add('hidden');
    calculatorSection.classList.add('hidden');
    portfolioSection.classList.add('hidden');
    reminderSection.classList.remove('hidden');
  });
});
