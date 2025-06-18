//prerequisites for this shit making sense
const form = document.getElementById("name-form");
const input = document.getElementById("name-input");
const welcomeMessage = document.getElementById("welcome-message");

//the butter to this bread and butter - if/else/else if
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = input.value.trim();

    if (name === " ") {
        welcomeMessage.textContent = "Please enter your name!";
    } else {welcomeMessage.textContent = "Welcome Young Master " + name + "!";
    }
});

//i give my thanks to google, w3 school, and my excruciating note-taking process