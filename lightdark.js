const lightButton = document.getElementById('lightTheme');
const darkButton = document.getElementById('darkTheme');

lightButton.addEventListener('click', () => {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
});

darkButton.addEventListener('click', () => {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
});