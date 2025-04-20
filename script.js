// Toggle hidden content when "Learn More" is clicked
const learnBtn = document.getElementById('learnBtn');
const hiddenContent = document.getElementById('hiddenContent');

learnBtn.addEventListener('click', () => {
    hiddenContent.classList.toggle('hidden');
    learnBtn.textContent = hiddenContent.classList.contains('hidden') 
        ? 'Learn More' 
        : 'Hide Content';
});

// Color-changing button functionality
const colorBtn = document.getElementById('colorBtn');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3'];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBtn.style.backgroundColor = colors[colorIndex];
    colorBtn.style.color = colorIndex > 2 ? 'white' : 'black';
});