// Landing Page Logic
function openTabs() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("tabs").style.display = "flex";
  document.getElementById("defaultOpen").click();
}

// Tab functionality
function openPage(pageName, elmnt) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }  
  if (pageName === "landing-page") {
    document.getElementById("landing-page").style.display = "flex"; // Show landing page
    document.getElementById("tabs").style.display = "none"; // Hide tabs
  } else {
    document.getElementById(pageName).style.display = "block"; // Show selected tab content
  }
}

// Open default tab
document.getElementById("defaultOpen").click();

// Valentine Page Logic
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const stopBtn = document.getElementById("stop-btn");
const animationContainer = document.getElementById("animation-container");

yesBtn.addEventListener("click", () => {
  // Add glowing effect
  document.body.classList.add("glow-effect");

  // Display a romantic message
  animationContainer.innerHTML = "<p>💖 Yay! Happy Valentine's Day! 💖</p>";


  // Play romantic sound
  const audio = new Audio('https://pagalfree.com/musics/128-Ajab%20Si%20-%20Om%20Shanti%20Om%20128%20Kbps.mp3'); // Replace with a romantic sound URL
  audio.play();

  // Heart animation
  const heartContainer = document.createElement('div');
  heartContainer.style.position = 'fixed';
  heartContainer.style.top = '0';
  heartContainer.style.left = '0';
  heartContainer.style.width = '100%';
  heartContainer.style.height = '100%';
  heartContainer.style.pointerEvents = 'none';
  document.body.appendChild(heartContainer);

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'absolute';
    heart.style.fontSize = '30px';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
    heartContainer.appendChild(heart);
  }

  // Remove hearts after 5 seconds
  setTimeout(() => {
    heartContainer.remove();
  }, 5000);
});

noBtn.addEventListener("click", () => {
  alert("Please say yes! 🥺");
  const audio = new Audio('https://pagalfree.com/musics/128-O%20Bedardeya%20-%20Tu%20Jhoothi%20Main%20Makkar%20128%20Kbps.mp3'); // Replace with a romantic sound URL
  audio.play();
});



// Valentine's Week Logic
function showRoses() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>🌹 Roses are red, violets are blue... I’m bad at rhymes, but I’ll be your Valentine! 🌹</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showPromise() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>🤝 I promise to eat the last part of cornetto... sometimes. 🤝</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showHug() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>🤗 Hugs are free, but this one’s priceless! 🤗</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showKiss() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>💋 Sending virtual kisses! MUWAHH 💋</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showTeddy() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>🧸 Here’s a teddy to cuddle when I’m not around! 🧸</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showChocolate() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>🍫 Chocolate is my love language. What’s yours? 🍫</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

function showProposal() {
  const weekAnimation = document.getElementById("week-animation");
  weekAnimation.innerHTML = "<p>💍 Will you marry me? 💍</p>";
  var audio = new Audio('images/guitar1.mp3');
  audio.play();
}

// Love Quiz Logic
const quizQuestions = [
  {
    question: "What’s my favorite color?",
    options: ["Red", "Blue", "Green", "Pink"],
    answer: "Blue"
  },
  {
    question: "What’s my ideal date?",
    options: ["Dinner and a movie", "A walk on the beach", "Netflix and chill", "Adventure sports"],
    answer: "Dinner and a movie"
  },
  {
    question: "What’s my favorite dessert?",
    options: ["Chocolate cake", "Ice cream", "Cheesecake", "Fruit tart"],
    answer: "Ice cream"
  },
  {
    question: "What’s my favorite type of music?",
    options: ["Romantic", "Rock", "Pop", "Classical"],
    answer: "Romantic"
  },
  {
    question: "What’s your favorite time of the day?",
    options: ["Morning", "Afternoon", "Evening", "Night"],
    answer: "Evening"
  },
  {
    question: "What’s your favorite drink?",
    options: ["Tea", "Coffee", "Juice", "Soda"],
    answer: "Tea"
  },
  {
    question: "What’s your favorite cuisine?",
    options: ["Chinese", "Italian", "Indian", "Mexican"],
    answer: "Chinese"
  },
  {
    question: "What’s your favorite season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    answer: "Spring"
  },
  {
    question: "What’s your favorite choco?",
    options: ["DairyMilk", "Snickers", "Kitkat", "5 Star"],
    answer: "Kitkat"
  },
  {
    question: "What’s your favorite animal?",
    options: ["Dog", "Cat", "Rabbit", "Bird"],
    answer: "Dog"
  },
  {
    question: "What’s your favorite hobby?",
    options: ["Reading", "Gaming", "Cooking", "Traveling"],
    answer: "Gaming"
  },
  {
    question: "What’s your favorite movie genre?",
    options: ["Romance", "Action", "Comedy", "Thriller"],
    answer: "Thriller"
  },
  {
    question: "What’s your favorite holiday destination?",
    options: ["Beach", "Mountains", "City", "Countryside"],
    answer: "Mountains"
  },
  {
    question: "What’s your favorite sport?",
    options: ["Football", "Basketball", "Tennis", "Cricket"],
    answer: "Football"
  },
  {
    question: "What’s your favorite game genre?",
    options: ["RPG", "Mystery", "Fantasy", "Sci-Fi"],
    answer: "RPG"
  },
  {
    question: "What’s your favorite way to relax?",
    options: ["Meditation", "Watching TV", "Listening to music", "Taking a bath"],
    answer: "Listening to music"
  },
  {
    question: "What’s your favorite type of soda?",
    options: ["Coke", "Sprite", "Mirinda", "Maaza"],
    answer: "Coke"
  },
  {
    question: "What’s your favorite fruit?",
    options: ["Apple", "Banana", "Watermelon", "Mango"],
    answer: "Watermelon"
  },
  {
    question: "What’s your favorite way to spend a weekend?",
    options: ["At home", "Out with friends", "Traveling", "Exploring new places"],
    answer: "At home"
  },
  {
    question: "What’s your favorite type of weather?",
    options: ["Sunny", "Rainy", "Breezy", "Cloudy"],
    answer: "Breezy"
  },
  {
    question: "What’s your favorite type of shoe?",
    options: ["Sneakers", "Sandals", "Heels", "Boots"],
    answer: "Sneakers"
  },
  {
    question: "What’s your favorite type of car?",
    options: ["SUV", "Sedan", "Sports car", "Electric car"],
    answer: "SUV"
  },
  {
    question: "What’s your favorite type of vacation?",
    options: ["Relaxing", "Adventurous", "Cultural", "Luxurious"],
    answer: "Relaxing"
  },
  {
    question: "What’s your favorite type of pet?",
    options: ["Dog", "Cat", "Fish", "Bird"],
    answer: "Dog"
  },
  {
    question: "What’s your favorite type of gift?",
    options: ["Clothes", "Jewelry", "You", "Chocolates"],
    answer: "You"
  }
  
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("quiz-question");
  const optionsElement = document.getElementById("quiz-options");
  const currentQuiz = quizQuestions[currentQuestion];

  questionElement.textContent = currentQuiz.question;
  optionsElement.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuiz = quizQuestions[currentQuestion];
  if (selectedOption === currentQuiz.answer) {
    score += 1; // Increase score for correct answer
    updateLoveMeter(); // Update the love meter
  }
  document.getElementById("quiz-score").textContent = `Score: ${score}/25`;
  nextQuestion(); // Move to the next question, regardless of correctness
}

function updateLoveMeter() {
  const loveMeterFill = document.getElementById("love-meter-fill");
  const percentage = (score / 25) * 100;
  loveMeterFill.style.width = `${percentage}%`;
}

function nextQuestion() {
  currentQuestion += 1;
  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    alert(`Quiz over! Your final score is ${score}/25. ${getRomanticMessage(score)}`);
  }
}

function getRomanticMessage(score) {
  if (score >= 20) {
    return "You're a true romantic! 💖";
  } else if (score >= 10) {
    return "You're getting there! Keep loving! 💕";
  } else {
    return "Hmm... maybe I love you more ! 😅";
  }
}

// Load the first question when the page loads
loadQuestion();

// Dates to Remember Logic
function revealPurpose(dateElement) {
  const purposeElement = dateElement.nextElementSibling; // Get the purpose element
  purposeElement.classList.toggle("reveal"); // Toggle the reveal class
}