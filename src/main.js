// query selector variables go here 👇
var titleText = "";
var quoteText = "";
var imageSource = "";

var titleTextElement = document.querySelector(".poster-title");
var quoteTextElement = document.querySelector(".poster-quote");
var imageElement = document.querySelector(".poster-img");
var makeYourOwnPosterButton = document.querySelector(".show-form");
var mainPosterElement = document.querySelector(".main-poster");
var posterFormElement = document.querySelector(".poster-form");
var nevermindButton = document.querySelector(".show-main");
var savedPostersButton = document.querySelector(".show-saved");
var savedPostersElement = document.querySelector(".saved-posters");
var backToMainFromSavedButton = document.querySelector(".back-to-main");
var showRandomButton = document.querySelector(".show-random");
var saveThisPosterButton = document.querySelector(".save-poster");
var savedPostersGrid = document.querySelector(".saved-posters-grid");
var showCustomPoster = document.querySelector(".make-poster");
var userQuote = document.querySelector("#poster-quote");
var userTitle = document.querySelector("#poster-title");
var userImage = document.querySelector("#poster-image-url");

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener("load", buildRandomPoster);
showRandomButton.addEventListener("click", buildRandomPoster);

makeYourOwnPosterButton.addEventListener("click", toggleMainPosterAndPosterForm);
nevermindButton.addEventListener("click", toggleMainPosterAndPosterForm);

savedPostersButton.addEventListener("click", toggleMainPosterAndSavedPosters);
backToMainFromSavedButton.addEventListener("click", toggleMainPosterAndSavedPosters);

showCustomPoster.addEventListener("click", buildCustomPoster);

saveThisPosterButton.addEventListener("click", saveThisPoster);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function buildRandomPoster() {
  var randomTitleIndex = getRandomIndex(titles);
  titleText = titles[randomTitleIndex];
  titleTextElement.innerHTML = titleText;

  var randomQuoteText = getRandomIndex(quotes);
  quoteText = quotes[randomQuoteText];
  quoteTextElement.innerHTML = quoteText;

  var randomImageIndex = getRandomIndex(images);
  imageSource = images[randomImageIndex];
  imageElement.src = imageSource;

  currentPoster = new Poster (imageSource, titleText, quoteText)
};

function buildCustomPoster(event) {
  event.preventDefault();
  
  currentPoster = new Poster(userImage.value, userTitle.value, userQuote.value);

  imageElement.src = currentPoster.imageURL;
  titleTextElement.innerText = currentPoster.title;
  quoteTextElement.innerText = currentPoster.quote;

  addImages();
  addTitles();
  addQuotes();
  toggleMainPosterAndCustomPosterForm();
};

function toggleMainPosterAndPosterForm() {
  mainPosterElement.classList.toggle("hidden");
  posterFormElement.classList.toggle("hidden");
};

function toggleMainPosterAndCustomPosterForm() {
  mainPosterElement.classList.toggle("hidden");
  posterFormElement.classList.toggle("hidden");
};

function toggleMainPosterAndSavedPosters() {
  mainPosterElement.classList.toggle("hidden");
  savedPostersElement.classList.toggle("hidden");
  writeMiniPosters();
  createListenersForMiniPosters();
};

function deletePoster(event) {
  function findPosterbyId(poster) {
    return `${poster.id}` === miniPosterId;
  };

  var miniPosterId = event.target.dataset.posterId;
  var location = savedPosters.findIndex(findPosterbyId);

  savedPosters.splice(location, 1);
  writeMiniPosters();
  createListenersForMiniPosters();
};

function writeMiniPosters() {
  var markup = "";
  
  for (var i = 0; i < savedPosters.length; i++) {
    markup += `
     <div class="mini-poster" data-poster-id=${savedPosters[i].id}>
       <img src=${savedPosters[i].imageURL} data-poster-id=${savedPosters[i].id} alt=${savedPosters[i].title}>
       <h2 data-poster-id=${savedPosters[i].id}>${savedPosters[i].title}</h2>
       <h4 data-poster-id=${savedPosters[i].id}>${savedPosters[i].quote}</h4>
     </div>
    `;
  };

  savedPostersGrid.innerHTML = markup;
};  

function createListenersForMiniPosters() {
  var miniPosterElements = document.querySelectorAll(".mini-poster");
  
  for (var miniposter of miniPosterElements) {
    miniposter.addEventListener("dblclick", deletePoster);
  };
};
 
function saveThisPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
};

function addImages() {
  if (!images.includes(currentPoster.imageURL)) {
    images.push(currentPoster.imageURL);
  }
};

function addTitles() {
  if (!titles.includes(currentPoster.title)) {
    titles.push(currentPoster.title);
  }
};

function addQuotes() {
  if (!quotes.includes(currentPoster.quote)) {
    quotes.push(currentPoster.quote);
  }
};
