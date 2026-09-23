const leaderboardData = [
  { player: "AlexCode", category: "Coding", score: "10/10" },
  { player: "GeoKing", category: "Geography", score: "9/10" },
  { player: "PixelPro", category: "Video Games", score: "8/10" }
];

function populateLeaderboard(data) {
  const tbody = document.getElementById("offcanvasLeaderboard");
  if (!tbody) return;

  tbody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="fw-bold">${item.player}</td>
      <td>${item.category}</td>
      <td class="text-success fw-bold">${item.score}</td>
    `;

    tbody.appendChild(row);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("subName");
  const emailInput = document.getElementById("subEmail");
  const messageBox = document.getElementById("subMessage");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  let valid = true;

  if (name.length < 2) {
    nameInput.classList.add("is-invalid");
    valid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailInput.classList.add("is-invalid");
    valid = false;
  } else {
    emailInput.classList.remove("is-invalid");
  }

  if (valid) {
    messageBox.style.display = "block";
    messageBox.textContent = `Thanks ${name}! Subscribed with ${email}.`;
    nameInput.value = "";
    emailInput.value = "";
  } else {
    messageBox.style.display = "none";
  }
}

$(document).ready(function () {
  populateLeaderboard(leaderboardData);

  $("#darkModeBtn").on("click", function () {
    $("body").toggleClass("dark-mode");
    const isDark = $("body").hasClass("dark-mode");

    if (isDark) {
      $(this).css({ "background-color": "#ffffff", "color": "#000000" });
    } else {
      $(this).css({ "background-color": "", "color": "" });
    }
  });

  $("#animatePanelBtn").on("click", function () {
    $(".offcanvas-body")
      .animate({ opacity: 0.4 }, 200)
      .animate({ opacity: 1.0 }, 200);
  });

  $("#offcanvasForm").on("submit", handleFormSubmit);
});