// Get the dark/light button from the page (matches id="themeToggle")
const btn = document.getElementById("themeToggle");

// Show the sun in night mode and the moon in day mode
function updateIcon() {

    // Check if the body currently has the "night" class
    if (document.body.classList.contains("night")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}

// On page load: if "night" was saved, turn night mode back on
if (localStorage.getItem("theme") === "night") {
    document.body.classList.add("night");
}

// Set the right icon for the mode the page starts in
updateIcon();

// When the button is clicked, run this function
btn.addEventListener("click", function () {

    // Add the "night" class if missing, remove it if present
    document.body.classList.toggle("night");

    // Save the new state so it survives refreshes and page changes
    if (document.body.classList.contains("night")) {
        localStorage.setItem("theme", "night");
    } else {
        localStorage.setItem("theme", "day");
    }

    // Swap the icon to match the new mode
    updateIcon();
});

var answers = { q1: "a", q2: "b", q3: "a" };

    function checkAnswers() {
      var score = 0;
      var total = 0;

      for (var question in answers) {
        total++;
        var chosen = document.querySelector('input[name="' + question + '"]:checked');
        if (chosen && chosen.value === answers[question]) {
          score++;
        }
      }

      document.getElementById("result").textContent =
        "You scored " + score + " out of " + total;
    }

    const goBtn = document.getElementById("goBtn");

if (goBtn) {
    goBtn.addEventListener("click", function () {
        window.location.href = "quiz.html";
    });
    }