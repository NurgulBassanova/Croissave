document.getElementById("openform").addEventListener("click", function() {
    var fform = document.getElementById("fform");
    fform.style.display = (fform.style.display === "none" || fform.style.display === "") ? "block" : "none";
});

let formData = {
    firstName: '',
    lastName: '',
    message: ''
};

function nextStep(step) {
    saveStepData(step);
    if (step === 1) {
        showStep(2);
    } else if (step === 2) {
        populateReviewStep();
        showStep(3);
    }
}

function previousStep(step) {
    if (step === 1) {
        showStep(1);
    } else if (step === 2) {
        showStep(2);
    }
}

function showStep(step) {
    document.querySelectorAll(".form-step").forEach((stepElement, index) => {
        stepElement.style.display = index + 1 === step ? "block" : "none";
    });
}

function saveStepData(step) {
    if (step === 1) {
        formData.firstName = document.getElementById("firstName").value;
        formData.lastName = document.getElementById("lastName").value;
    } else if (step === 2) {
        formData.message = document.getElementById("message").value;
    }
}

function populateReviewStep() {
    document.getElementById("reviewFirstName").innerText = formData.firstName;
    document.getElementById("reviewLastName").innerText = formData.lastName;
    document.getElementById("reviewMessage").innerText = formData.message;
}

document.querySelector('.feedbackf').addEventListener('submit', function(event) {
    event.preventDefault();

    var sound = document.getElementById('feedbackSound');
    sound.play();

    // Populate review fields after submission
    populateReviewStep();

    // Optionally hide the form after submission
    document.getElementById("fform").style.display = "none";
});