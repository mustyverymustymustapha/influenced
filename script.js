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
        document.getElementById('energy').textContent = energy;

        let mood;
        if (happiness > 70) {
            mood = 'happy';
            document.getElementById('pet').innerHTML = '😄';
        } else if (happiness < 30) {
            mood = 'sad';
            document.getElementById('pet').innerHTML = '😢';
        } else {
            mood = 'neutral';
            document.getElementById('pet').innerHTML = '😐';
        }

        return mood;
    }

    function interact(action) {
        switch(action) {
            case 'play':
                happiness = Math.min(100, happiness + 10);
                energy = Math.max(0, energy - 20);
                break;
            case 'feed':
                happiness = Math.min(100, happiness + 5);
                energy = Math.min(100, energy + 30);
                break;
            case 'sleep':
                happiness = Math.max(0, happiness - 5);
                energy = Math.min(100, energy + 50);
                break;
        }

        const mood = updateStats();
        const quote = getRandomQuote(mood);
        document.getElementById('quote').textContent = quote;
    }

    function decreaseStats() {
        happiness = Math.max(0, happiness - 5);
        energy = Math.max(0, energy - 5);
        updateStats();
    }

    updateStats();
    document.getElementById('quote').textContent = getRandomQuote('neutral');

    setInterval(decreaseStats, 30000);