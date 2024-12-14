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
    }
];

// Grab the required DOM elements
const gamesList = document.querySelector('.games-list');

// Sort games alphabetically A-Z by title
function sortGamesAZ() {
    return [...games].sort((a, b) => a.title.localeCompare(b.title));
}

// Render games dynamically
function renderGames(gameList = games) {
    gamesList.innerHTML = ''; // Clear the game list

    if (gameList.length === 0) {
        gamesList.innerHTML = '<div class="no-results-message">No results found.</div>';
        return;
    }

    gameList.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title} Thumbnail" loading="lazy">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank">Play Now</a>
        `;
        gamesList.appendChild(gameItem);
    });
}

// Initial render: Sort and then render the games
document.addEventListener('DOMContentLoaded', () => {
    renderGames(sortGamesAZ()); // Automatically sort games alphabetically when the page loads
});

// XMAS CODE DOWN HERE

document.addEventListener('DOMContentLoaded', function() {
    // Christmas Games List
    const christmasGames = [
        {
            title: 'Game 1',
            description: 'First game of the event',
            thumbnail: 'games/game1/thumbnail.jpg',
            link: 'games/game1/game1.html',
            release_date: '2024-12-16'
        },
        {
            title: 'Game 2',
            description: 'Second game of the event',
            thumbnail: 'games/game2/thumbnail.jpg',
            link: 'games/game2/game2.html',
            release_date: '2024-12-17'
        },
        {
            title: 'Game 3',
            description: 'Third game of the event',
            thumbnail: 'games/game3/thumbnail.jpg',
            link: 'games/game3/game3.html',
            release_date: '2024-12-18'
        },
        {
            title: 'Game 4',
            description: 'Fourth game of the event',
            thumbnail: 'games/game4/thumbnail.jpg',
            link: 'games/game4/game4.html',
            release_date: '2024-12-19'
        },
        {
            title: 'Game 5',
            description: 'Fifth game of the event',
            thumbnail: 'games/game5/thumbnail.jpg',
            link: 'games/game5/game5.html',
            release_date: '2024-12-20'
        },
        {
            title: 'Game 6',
            description: 'Sixth game of the event',
            thumbnail: 'games/game6/thumbnail.jpg',
            link: 'games/game6/game6.html',
            release_date: '2024-12-21'
        },
        {
            title: 'Game 7',
            description: 'Seventh game of the event',
            thumbnail: 'games/game7/thumbnail.jpg',
            link: 'games/game7/game7.html',
            release_date: '2024-12-22'
        },
        {
            title: 'Game 8',
            description: 'Eighth game of the event',
            thumbnail: 'games/game8/thumbnail.jpg',
            link: 'games/game8/game8.html',
            release_date: '2024-12-23'
        },
        {
            title: 'Game 9',
            description: 'Ninth game of the event',
            thumbnail: 'games/game9/thumbnail.jpg',
            link: 'games/game9/game9.html',
            release_date: '2024-12-24'
        },
        {
            title: 'Game 10',
            description: 'Tenth game of the event',
            thumbnail: 'games/game10/thumbnail.jpg',
            link: 'games/game10/game10.html',
            release_date: '2024-12-25'
        }
    ];

    // Grab the divs where games will be injected
    const christmasGamesList = document.getElementById('christmasGamesList');
    const currentDate = new Date().toISOString().split('T')[0];  // Get current date in YYYY-MM-DD format

    // Render Christmas Games
    christmasGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        if (game.release_date <= currentDate) {
            // Game is available
            gameItem.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.link}">Play Now</a>
            `;
        } else {
            // Game is coming soon
            gameItem.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>Coming soon on ${game.release_date}</p>
            `;
        }

        christmasGamesList.appendChild(gameItem);
    })});