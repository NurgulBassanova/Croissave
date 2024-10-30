
function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.querySelector('.wrapper').classList.remove('light-green-theme', 'dark-green-theme');
        if (theme === 'light') {
            document.querySelector('.wrapper').classList.add('light-green-theme');
        } else if (theme === 'dark') {
            document.querySelector('.wrapper').classList.add('dark-green-theme');
        }
    }
}

document.getElementById('light').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('dark-green-theme');
    document.querySelector('.wrapper').classList.add('light-green-theme');
    localStorage.setItem('theme', 'light'); 
});

document.getElementById('dark').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('light-green-theme');
    document.querySelector('.wrapper').classList.add('dark-green-theme');
    localStorage.setItem('theme', 'dark'); 
});

document.getElementById('original').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('light-green-theme', 'dark-green-theme');
    localStorage.removeItem('theme'); 
});

window.onload = applyTheme;


