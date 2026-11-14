// Dark Mode
let themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

themeBtn.addEventListener("click", toggleDarkMode);

// Next Major
let majorImg = document.getElementById("majorImg");
let majorText = document.getElementById("majorText");
let nextBtn = document.getElementById("nextBtn");

let images = ["images/CS.png", "images/IT.png", "images/IS.png"];
let alts = ["Computer Science", "Information Technology", "Information Systems"];
let texts = [
    "Love math and solving puzzles? Computer Science might be for you!",
    "Interested in managing computer systems and networks? Information Technology could be your path!",
    "Fascinated by how businesses use technology? Information Systems might be the right fit!",
];
let current = 0;

function nextMajor() {
    current = current + 1;
    if (current == 3) {
        current = 0;
    }
    majorImg.src = images[current];
    majorImg.alt = alts[current];
    majorText.textContent = texts[current];
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextMajor);
}

// Sign Up Check
let signupForm = document.getElementById("signupForm");

function checkSignup(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let signupError = document.getElementById("signupError");
    let badName = false;
    let letters = "abcdefghijklmnopqrstuvwxyz ";
    for (let i = 0; i < fullname.length; i++) {
        let ch = fullname[i].toLowerCase();
        if (letters.includes(ch) == false) {
            badName = true;
        }
    }

    signupError.style.color = "red";

    if (fullname.trim() == "") {
        signupError.textContent = "Please enter your name.";
    } else if (badName) {
        signupError.textContent = "Please enter a valid name.";
    } else if (password.length < 8) {
        signupError.textContent = "Password must be at least 8 characters.";
    } else if (password != confirmPassword) {
        signupError.textContent = "Passwords do not match.";
    } else {
        signupError.textContent = "";
        let welcome = document.createElement("p");
        welcome.textContent = "Welcome to MajorMate, " + fullname + "!";
        welcome.style.color = "green";
        signupForm.after(welcome);
        signupForm.style.display = "none";
        document.getElementById("signupIntro").style.display = "none";
    }
}

if (signupForm) {
    signupForm.addEventListener("submit", checkSignup);
}

// Log In Check
let loginForm = document.getElementById("loginForm");

function checkLogin(event) {
    event.preventDefault();

    let loginPassword = document.getElementById("loginPassword").value;
    let loginError = document.getElementById("loginError");

    loginError.style.color = "red";

    if (loginPassword.length < 8) {
        loginError.textContent = "Password must be at least 8 characters.";
    } else {
        loginError.textContent = "";
        let welcomeBack = document.createElement("p");
        welcomeBack.textContent = "Welcome back to MajorMate!";
        welcomeBack.style.color = "green";
        loginForm.after(welcomeBack);
        loginForm.style.display = "none";
        document.getElementById("loginIntro").style.display = "none";
    }
}

if (loginForm) {
    loginForm.addEventListener("submit", checkLogin);
}
