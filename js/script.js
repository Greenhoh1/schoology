// List of games (keep your game list as is)
const games = [
    {
        title: 'OvO',
        description: 'Try and beat this impossible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    },
    {
        title: 'Moto X3M',
        description: 'Fun game about motorcycles',
        thumbnail: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/index.html'
    },
    {
        title: 'Moto X3M 2',
        description: 'Fun game about motorcycles V2',
        thumbnail: 'games/MotoX3M/2/thumbnail.png',
        link: 'games/MotoX3M/2/index.html'
    },
    {
        title: 'Moto X3M Winter',
        description: 'Fun game about motorcycles on a winter map with extra challenges!',
        thumbnail: 'games/MotoX3M/4-winter/thumbnail.png',
        link: 'games/MotoX3M/4-winter/index.html'
    },
    {
        title: 'Moto X3M Pool Party',
        description: 'Fun game about motorcycles with fun pool party challenges!',
        thumbnail: 'games/MotoX3M/5-pool-party/thumbnail.png',
        link: 'games/MotoX3M/5-pool-party/index.html'
    },
    {
        title: 'Moto X3M spooky land',
        description: 'Fun game about motorcycles with scary halloween theming!',
        thumbnail: 'games/MotoX3M/6-spooky-land/thumbnail.png',
        link: 'games/MotoX3M/6-spooky-land/index.html'
    },
    {
        title: 'Idle Breakout',
        description: 'An idle game where your goal is to break blocks that spawn in.',
        thumbnail: 'games/IdleBreakout/img/thumbnail.png',
        link: 'games/IdleBreakout/index.html'
    },
    {
        title: 'Sandtris',
        description: 'Tetris but with physics!',
        thumbnail: 'games/Sandtris/thumbnail.png',
        link: 'games/Sandtris/index.html'
    },
    {
        title: 'House Of Hazards',
        description: 'Dodge your friends or npcs as you complete tasks to win the game!',
        thumbnail: 'games/HouseOfHazards/thumbnail.png',
        link: 'games/HouseOfHazards/index.html'
    },
    {
        title: 'Soccer Random',
        description: 'Play some soccer and score some goals!',
        thumbnail: 'games/SoccerRandom/thumbnail.png',
        link: 'games/SoccerRandom/index.html'
    },
    {
        title: 'Retro Bowl',
        description: 'Play some football with your favorite teams!',
        thumbnail: 'games/RetroBowl/thumbnail.png',
        link: 'games/RetroBowl/index.html'
    },
    {
        title: 'Cookie Clicker',
        description: 'Start clicking that cookie and take over the world!',
        thumbnail: 'games/CookieClicker/thumbnail.png',
        link: 'games/CookieClicker/index.html'
    },
    {
        title: 'Boxing Random',
        description: 'Fight your way up the ranks or fight your friends in boxing random!',
        thumbnail: 'games/BoxingRandom/thumbnail.png',
        link: 'games/BoxingRandom/index.html'
    },
    {
        title: 'Volley Random',
        description: 'Challenge your friends or family to a fun game of volleyball.',
        thumbnail: 'games/VolleyRandom/thumbnail.png',
        link: 'games/VolleyRandom/index.html'
    },
    {
        title: 'Polytrack',
        description: 'This is just rip off Trackmania lol',
        thumbnail: 'games/Polytrack/thumbnail.png',
        link: 'games/Polytrack/index.html'
    },
    {
        title: 'Basketball Legends 2020',
        description: 'This is a game all about basketball.',
        thumbnail: 'games/BasketballLegends2020/thumbnail.png',
        link: 'games/BasketballLegends2020/index.html'
    },
    {
        title: 'Drive Mad',
        description: 'This is a fun puzzle game that involves cars!',
        thumbnail: 'games/DriveMad/webapp/cover.jpg',
        link: 'games/DriveMad/index.html'
    },
    {
        title: 'A Small World Cup',
        description: 'a fun mini-soccer sports game where you control a rag doll and slam it against the arena to make the ball score a goal.',
        thumbnail: 'games/ASmallWorldCup/thumbnail.png',
        link: 'games/ASmallWorldCup/index.html'
    },
    {
        title: 'The Oregon Trail',
        description: 'You get to play the role of a wagon leader and guide your group of chosen settlers from Independence, Missouri, to the Willamette Valley in Oregon while traveling along the Oregon Trail.',
        thumbnail: 'games/OregonTrail/thumbnail.png',
        link: 'games/OregonTrail/index.html'
    },
    {
        title: 'Pacman',
        description: 'Its pacman people get it together.',
        thumbnail: 'games/Pacman/icon/ios_icon.png',
        link: 'games/Pacman/index.html'
    },
    {
        title: 'Hextris',
        description: 'An addictive puzzle game inspired by Tetris.',
        thumbnail: 'games/Hextris/images/icons/apple-touch-512.png',
        link: 'games/Hextris/index.html'
    },
    {
        title: 'Slope',
        description: 'In this captivating speed run game, you will navigate a futuristic slope, deftly dodging obstacles as you roll your ball to victory.',
        thumbnail: 'games/Slope/thumbnail.png',
        link: 'games/Slope/index.html'
    },
    {
        title: 'Boxy Run',
        description: 'The objective of the game is to jump and shuffle to avoid the trees. The 3D Graphics are powered by Three.js, which provides the camera, lights, and basic geometries required to create the scene.',
        thumbnail: 'games/BoxyRun/thumbnail.png',
        link: 'games/BoxyRun/index.html'
    },
    {
        title: 'Breakout',
        description: 'Pass through diffrent levels and dont let the ball reach the bottom of the screen.',
        thumbnail: 'games/Breakouts/breakouts/enchantjs/resources/logo.png',
        link: 'games/Breakouts/breakouts/enchantjs/index.html'
    }
];

// Game data configuration
const GAMES_CONFIG = {
    sortOrder: 'alphabetical',
    defaultThumbnail: 'images/default-thumbnail.png'
};

// DOM Elements using a more structured approach
const DOM = {
    gamesList: document.querySelector('.games-list'),
    search: {
        input: document.getElementById('searchInput'),
        button: document.getElementById('searchButton'),
        clearButton: document.getElementById('clearSearchButton')
    },
    tos: {
        modal: document.getElementById('tosModal'),
        acceptButton: document.getElementById('acceptTOS')
    }
};

// Game Manager Class
class GameManager {
    constructor(games) {
        this.games = games;
        this.filteredGames = [...games];
    }

    sortGames() {
        return [...this.games].sort((a, b) => a.title.localeCompare(b.title));
    }

    filterGames(searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        this.filteredGames = this.games.filter(game => 
            game.title.toLowerCase().includes(query) || 
            game.description.toLowerCase().includes(query)
        );
        this.renderGames();
    }

    createGameCard(game) {
        return `
            <div class="game-item" data-game-id="${game.title.toLowerCase().replace(/\s+/g, '-')}">
                <img src="${game.thumbnail}" alt="${game.title}" 
                     onerror="this.src='${GAMES_CONFIG.defaultThumbnail}'">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" class="play-button" target="_blank">Play Now</a>
            </div>
        `;
    }

    renderGames() {
        const gameCards = this.filteredGames.length === 0 
            ? '<div class="no-results">No games found. Try a different search.</div>'
            : this.filteredGames.map(game => this.createGameCard(game)).join('');

        DOM.gamesList.innerHTML = gameCards;
        this.addGameCardListeners();
    }

    addGameCardListeners() {
        document.querySelectorAll('.game-item').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('play-button')) {
                    const playButton = card.querySelector('.play-button');
                    playButton.click();
                }
            });
        });
    }

    init() {
        this.filteredGames = this.sortGames();
        this.renderGames();
    }
}

// Terms of Service Handler
const TOSHandler = {
    init() {
        if (!localStorage.getItem('tosAccepted')) {
            DOM.tos.modal.style.display = 'block';
        }
    },

    accept() {
        localStorage.setItem('tosAccepted', 'true');
        DOM.tos.modal.style.display = 'none';
    }
};

// Search Handler
const SearchHandler = {
    init() {
        this.addEventListeners();
        this.checkUrlParams();
    },

    addEventListeners() {
        DOM.search.button.addEventListener('click', () => this.performSearch());
        DOM.search.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
        DOM.search.clearButton.addEventListener('click', () => this.clearSearch());
    },

    performSearch() {
        const query = DOM.search.input.value.trim();
        if (query) {
            window.history.pushState({}, '', `/?search=${encodeURIComponent(query)}`);
            gameManager.filterGames(query);
        }
    },

    clearSearch() {
        DOM.search.input.value = '';
        window.history.pushState({}, '', '/');
        gameManager.init();
    },

    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            DOM.search.input.value = searchQuery;
            gameManager.filterGames(searchQuery);
        }
    }
};

// Initialize Application
const gameManager = new GameManager(games);

document.addEventListener('DOMContentLoaded', () => {
    TOSHandler.init();
    SearchHandler.init();
    gameManager.init();
});