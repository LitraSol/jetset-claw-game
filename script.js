
let hasPlayedToday = localStorage.getItem("lastPlayedDate") === new Date().toLocaleDateString();

const prizes = [
  { code: "Charm Drop", description: 'Use this discount code to get free nail charms with your order.' },
  { code: "Color Me Lucky!", description: 'Use this discount code to get a free nail color with your order.' },
  { code: "Takeoff", description: 'Use this discount code to get a free full set of press-on nails with your order.' },
  { code: "JetSet10!", description: 'Use this to get 10% Off your order.' },
  { code: "Oops, Just Missed It…", description: 'No prize this time, try again tomorrow!' },
];

function handleDrop() {
  if (hasPlayedToday) {
    document.getElementById("dropBtn").disabled = true;
    document.getElementById("dropBtn").innerText = "Already Played Today";
    return;
  }

  const video = document.getElementById("prizeVideo");
  video.play();

  video.onended = function () {
    const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById("popupText").innerHTML = `🎁 <strong>"${selectedPrize.code}"</strong><br>${selectedPrize.description}`;
    document.getElementById("popup").style.display = "flex";
    localStorage.setItem("lastPlayedDate", new Date().toLocaleDateString());
    document.getElementById("dropBtn").disabled = true;
  };
}

function resetGame() {
  localStorage.removeItem("lastPlayedDate");
  document.getElementById("dropBtn").disabled = false;
  document.getElementById("dropBtn").innerText = "Play to Win";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
