// Get the dark/light button from the page (matches id="themeToggle")
const btn = document.getElementById("themeToggle");

// Show the sun in night mode and the moon in day mode
function updateIcon() {

    // If this page has no theme button, do nothing
    if (!btn) { return; }

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
if (btn) {
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
}

var answers = { q1: "a", q2: "b", q3: "a", q4: "b", q5: "a", q6: "b" };

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

      var message = "";

      // 5 or 6 correct counts as a win
      if (score >= 5) {
        message = "Amazing! You're an Earth Defender! 🌍 You scored " + score + " out of " + total + ".";
      } else {
        message = "You scored " + score + " out of " + total + ". Try again!";
      }

      document.getElementById("result").textContent =
        message + " Going back in 5 seconds...";

      // After 5 seconds  go to the About page
      setTimeout(function () {
        window.location.href = "About.html";
      }, 5000);
    }

    const goBtn = document.getElementById("goBtn");

if (goBtn) {
    goBtn.addEventListener("click", function () {
        window.location.href = "quiz.html";
    });
    }