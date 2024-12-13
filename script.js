// List of games (keep your game list as is)
const games = [
    {
        id: 1,
        name: 'OvO',
        category: 'action',
        description: 'Try and beat this impossible game!',
        image: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    },
    {
        id: 2,
        name: 'Moto X3M',
        category: 'racing',
        description: 'Fun game about motorcycles',
        image: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/index.html'
    },
    {
        id: 3,
        name: 'Moto X3M 2',
        category: 'racing',
        description: 'Fun game about motorcycles V2',
        image: 'games/MotoX3M/2/thumbnail.png',
        link: 'games/MotoX3M/2/index.html'
    },
    {
        id: 4,
        name: 'Moto X3M Winter',
        category: 'racing',
        description: 'Fun game about motorcycles on a winter map with extra challenges!',
        image: 'games/MotoX3M/4-winter/thumbnail.png',
        link: 'games/MotoX3M/4-winter/index.html'
    },
    {
        id: 5,
        name: 'Moto X3M Pool Party',
        category: 'racing',
        description: 'Fun game about motorcycles with fun pool party challenges!',
        image: 'games/MotoX3M/5-pool-party/thumbnail.png',
        link: 'games/MotoX3M/5-pool-party/index.html'
    },
    {
        id: 6,
        name: 'Moto X3M Spooky Land',
        category: 'racing',
        description: 'Fun game about motorcycles with scary halloween theming!',
        image: 'games/MotoX3M/6-spooky-land/thumbnail.png',
        link: 'games/MotoX3M/6-spooky-land/index.html'
    },
    {
        id: 7,
        name: 'Idle Breakout',
        category: 'idle',
        description: 'An idle game where your goal is to break blocks that spawn in.',
        image: 'games/IdleBreakout/img/thumbnail.png',
        link: 'games/IdleBreakout/index.html'
    },
    {
        id: 8,
        name: 'Sandtris',
        category: 'puzzle',
        description: 'Tetris but with physics!',
        image: 'games/Sandtris/thumbnail.png',
        link: 'games/Sandtris/index.html'
    },
    {
        id: 9,
        name: 'House Of Hazards',
        category: 'action',
        description: 'Dodge your friends or npcs as you complete tasks to win the game!',
        image: 'games/HouseOfHazards/thumbnail.png',
        link: 'games/HouseOfHazards/index.html'
    },
    {
        id: 10,
        name: 'Soccer Random',
        category: 'sports',
        description: 'Play some soccer and score some goals!',
        image: 'games/SoccerRandom/thumbnail.png',
        link: 'games/SoccerRandom/index.html'
    },
    {
        id: 11,
        name: 'Retro Bowl',
        category: 'sports',
        description: 'Play some football with your favorite teams!',
        image: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html'
    },
    {
        id: 12,
        name: 'Cookie Clicker',
        category: 'idle',
        description: 'Start clicking that cookie and take over the world!',
        image: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html'
    },
    {
        id: 13,
        name: 'Boxing Random',
        category: 'sports',
        description: 'Fight your way up the ranks or fight your friends in boxing random!',
        image: 'games/BoxingRandom/thumbnail.png',
        link: 'games/BoxingRandom/index.html'
    },
    {
        id: 14,
        name: 'Volley Random',
        category: 'sports',
        description: 'Challenge your friends or family to a fun game of volleyball.',
        image: 'games/VolleyRandom/thumbnail.png',
        link: 'games/VolleyRandom/index.html'
    },
    {
        id: 15,
        name: 'Polytrack',
        category: 'racing',
        description: 'This is just rip off Trackmania lol',
        image: 'games/Polytrack/thumbnail.png',
        link: 'games/Polytrack/index.html'
    },
    {
        id: 16,
        name: 'Basketball Legends 2020',
        category: 'sports',
        description: 'This is a game all about basketball.',
        image: 'games/BasketballLegends2020/thumbnail.png',
        link: 'games/BasketballLegends2020/index.html'
    },
    {
        id: 17,
        name: 'Drive Mad',
        category: 'puzzle',
        description: 'This is a fun puzzle game that involves cars!',
        image: 'games/DriveMad/webapp/cover.jpg',
        link: 'games/DriveMad/index.html'
    },
    {
        id: 18,
        name: 'A Small World Cup',
        category: 'sports',
        description: 'A fun mini-soccer sports game where you control a rag doll and slam it against the arena to make the ball score a goal.',
        image: 'games/ASmallWorldCup/thumbnail.png',
        link: 'games/ASmallWorldCup/index.html'
    },
    {
        id: 19,
        name: 'The Oregon Trail',
        category: 'adventure',
        description: 'You get to play the role of a wagon leader and guide your group of chosen settlers from Independence, Missouri, to the Willamette Valley in Oregon while traveling along the Oregon Trail.',
        image: 'games/OregonTrail/thumbnail.png',
        link: 'games/OregonTrail/index.html'
    },
    {
        id: 20,
        name: 'Pacman',
        category: 'arcade',
        description: 'Its pacman people get it together.',
        image: 'games/Pacman/icon/ios_icon.png',
        link: 'games/Pacman/index.html'
    },
    {
        id: 21,
        name: 'Hextris',
        category: 'puzzle',
        description: 'An addictive puzzle game inspired by Tetris.',
        image: 'games/Hextris/images/icons/apple-touch-512.png',
        link: 'games/Hextris/index.html'
    },
    {
        id: 22,
        name: 'Slope',
        category: 'action',
        description: 'In this captivating speed run game, you will navigate a futuristic slope, deftly dodging obstacles as you roll your ball to victory.',
        image: 'games/Slope/thumbnail.png',
        link: 'games/Slope/index.html'
    },
    {
        id: 23,
        name: 'Boxy Run',
        category: 'action',
        description: 'The objective of the game is to jump and shuffle to avoid the trees. The 3D Graphics are powered by Three.js, which provides the camera, lights, and basic geometries required to create the scene.',
        image: 'games/BoxyRun/thumbnail.png',
        link: 'games/BoxyRun/index.html'
    }
];

// Example game data
const games = [
    { id: 1, title: "Action Adventure", category: "action", image: "https://via.placeholder.com/250x150", description: "An exciting action-packed adventure!" },
    { id: 2, title: "Puzzle Quest", category: "puzzle", image: "https://via.placeholder.com/250x150", description: "Challenge your mind with puzzles!" },
    { id: 3, title: "Epic Journey", category: "adventure", image: "https://via.placeholder.com/250x150", description: "Embark on an epic journey!" }
];

// DOM Elements
const gamesList = document.getElementById("gamesList");
const noResultsMessage = document.getElementById("noResultsMessage");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Render Games
function renderGames(filteredGames) {
    gamesList.innerHTML = ""; // Clear list
    if (filteredGames.length === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
        filteredGames.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.className = "game-item";
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="#">Play Now</a>
            `;
            gamesList.appendChild(gameItem);
        });
    }
}

// Initial render
renderGames(games);

// Search and Filter Functionality
document.getElementById("searchButton").addEventListener("click", () => {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filteredGames = games.filter(game => {
        return (
            game.title.toLowerCase().includes(searchText) &&
            (category === "all" || game.category === category)
        );
    });
    renderGames(filteredGames);
});

document.getElementById("clearSearchButton").addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    renderGames(games);
});

