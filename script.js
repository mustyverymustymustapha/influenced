const movieQuotes = {
  happy: [
      "You had me at hello.",
      "I'm king of the world!",
      "To infinity and beyond!",
      "Life is like a box of chocolates.",
      "May the Force be with you."
  ],
  neutral: [
      "Here's looking at you, kid.",
      "I'll be back.",
      "E.T. phone home.",
      "I am Groot.",
      "Why so serious?"
  ],
  sad: [
      "I'm gonna make him an offer he can't refuse.",
      "You can't handle the truth!",
      "I see dead people.",
      "You shall not pass!",
      "My precious."
  ]
};

let happiness = 50;
let energy = 50;

function getRandomQuote(mood) {
  const quotes = movieQuotes[mood];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateStats() {
  document.getElementById('happiness').textContent = happiness;