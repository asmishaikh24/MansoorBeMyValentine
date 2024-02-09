let growthFactor = 25;
let lastDisplayedIndex = -1; // Initialize the index of the last displayed sentence

const noButtonSentences = [
  "I'm Shy",
  "Why are you in shirpur on 14th :(",
  "You're breaking my heart :(",
  "Are you sure?",
  "Come on, Mansoor",
  "Babe please :/",
  "Am i not cute enough?",
  "How dare you!",
  "It will be a nice date.",
  "Reconsider :/",
  "Last chance!",
  "Are you really really really sure?",
  "We look cute together",
  "Think again",
  "Babeeeeeeee",
  "You only look good with me",
  "You have a lot of tantrums",
  "or maybe you're...",
];

function updateText() {
  const noButton = document.querySelector(".button.red");
  
  // Increment the index to display the next sentence
  lastDisplayedIndex = (lastDisplayedIndex + 1) % noButtonSentences.length;
  noButton.textContent = noButtonSentences[lastDisplayedIndex];

  const yesButton = document.getElementById("yesButton");
  growthFactor += 20; // Increase the growth factor on each click
  yesButton.style.fontSize = 45 + growthFactor + "px";
}

function redirectToLovePage() {
  window.location.href = "love.html"; // Change "love.html" to the filename of your love page
}

document.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.classList.contains('button') && event.target.classList.contains('red')) {
    return; // Exit the function without creating a heart if clicking on the "no" button
  }

  createHeart(event);
}

function createHeart(event) {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Generate a random rotation angle between -35 and 35 degrees
  const rotation = (Math.random() * 70) - 35;
  heart.style.transform = `rotate(${rotation}deg)`;

  heart.style.left = event.clientX + "px";
  heart.style.top = event.clientY + "px";

  document.body.appendChild(heart);

  // Remove the heart element after a short delay
  setTimeout(() => {
    document.body.removeChild(heart);
  }, 1000); // Adjust the delay as needed
}
