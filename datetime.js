function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').innerText = `Current Date and Time: ${formattedDateTime}`;
}

updateDateTime();

document.getElementById('toupdate').addEventListener('click', updateDateTime); 
