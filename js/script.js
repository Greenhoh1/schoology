// List of games (keep your game list as is)
const games = [
    {
        title: 'OvO',
        description: 'Try and beat this impossible game!',
        thumbnail: 'games/OvO/thumbnail.png',
        link: 'games/OvO/index.html'
    },
    {
        title: 'Moto X3M Game Selector',
        description: 'Fun game about motorcycles',
        thumbnail: 'games/MotoX3M/moto-x3m.png',
        link: 'games/MotoX3M/menu.html'
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
    },
    {
        title: 'Monkey Mart',
        description: 'an idle/management game where you control a cute monkey character who is in charge of a supermarket.',
        thumbnail: 'games/MonkeyMart/thumbnail.png',
        link: 'games/MonkeyMart/index.html'
    },
    {
            title: 'Snow Rider 3D',
            description: 'an exhilarating snowboarding experience.',
            thumbnail: 'games/SnowRider3D/thumbnail.png',
            link: 'games/SnowRider3D/index.html'
    },
    {
        title: 'Tetris',
        description: 'a fun little game about dalling puzzle pieces',
        thumbnail: 'games/Tetris/thumbnail.png',
        link: 'games/Tetris/index.html'
    },
    {
        title: 'Super Mario Bros',
        description: 'the first ever mario game!',
        thumbnail: 'games/SuperMarioBros/favicon.ico',
        link: 'games/SuperMarioBros/index.html'
    },
    {
        title: 'Mine Sweeper',
        description: 'a fun game about mines and flags',
        thumbnail: 'games/MineSweeper/favicon.ico',
        link: 'games/MineSweeper/index.html'
    },
    {
        title: 'Eggy Car',
        description: 'a hard driving game in which you are required to transport eggs while driving on roads that are both rough and uneven.',
        thumbnail: 'games/EggyCar/images/logo/eggy-car.png',
        link: 'games/EggyCar/index.html'
    },
    {
        title: 'Mario Kart 8',
        description: 'a fun racing game with mario characters',
        thumbnail: 'games/MarioKart8/Thumbnail.png',
        link: 'games/MarioKart8/index.html'
    },
    {
        title: 'Crossy Road',
        description: 'a fun game where you have to cross the road without getting hit by cars, trains, and other obstacles.',
        thumbnail: 'games/CrossyRoad/Thumbnail.png',
        link: 'games/CrossyRoad/index.html'
    },
    {
        title: 'Getting Over It',
        description: 'a fun game where you have to climb a mountain using a hammer.',
        thumbnail: 'games/GettingOverIt/Thumbnail.png',
        link: 'games/GettingOverIt/index.html'
    },
    {
        title: 'Mario Party S',// v.0.1.5
        description: 'a game where you have to play mini games to win.',
        thumbnail: 'games/MarioPartyS/Thumbnail.png',
        link: 'games/MarioPartyS/index.html'
    },
    {
        title: 'Super Mario Scralaxy',// v0.7.3.5
        description: 'a game where you have to collect stars to win.',
        thumbnail: 'games/SuperMarioScralaxy/Thumbnail.png',
        link: 'games/SuperMarioScralaxy/index.html'
    },
    {
        title: 'Super Mario Scratchy World',// v0.2.2
        description: 'a game where you have to collect coins to win.',
        thumbnail: 'games/SuperMarioScratchyWorld/Thumbnail.png',
        link: 'games/SuperMarioScratchyWorld/index.html'
    },
    {
        title: 'Mario Kart 8 Screluxe',// v0.6.7
        description: 'a fun racing game with mario characters',
        thumbnail: 'games/MarioKart8Screluxe/Thumbnail.png',
        link: 'games/MarioKart8Screluxe/index.html'
    },
    {
        title: 'Paper Mario Tear In Reality',// v0.1.2
        description: 'a game where you have to collect coins to win.',
        thumbnail: 'games/PaperMarioTearInReality/Thumbnail.png',
        link: 'games/PaperMarioTearInReality/index.html'
    },
    {
        title: 'Super Scratch Bros. Scrultimate',// v0.1.2.5
        description: 'a game where you have to collect coins to win.',
        thumbnail: 'games/SuperScratchBros.Scrultimate/Thumbnail.png',
        link: 'games/SuperScratchBros.Scrultimate/index.html'
    }
];

// Get DOM elements
const gamesList = document.querySelector('.games-list');

// Sort games alphabetically by title
function sortGamesAZ() {
    return [...games].sort((a, b) => a.title.localeCompare(b.title));
}

// Function to render games
function renderGames(filteredGames) {
    gamesList.innerHTML = ''; // Clear previous games
    if (filteredGames.length === 0) {
        gamesList.innerHTML = '<div class="no-results-message">No games found.</div>';
    } else {
        filteredGames.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            gameItem.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" target="_blank">Play Now</a>
            `;
            gamesList.appendChild(gameItem);
        });
    }
}

// Initial render: Sort and then render the games
document.addEventListener('DOMContentLoaded', () => {
    renderGames(sortGamesAZ());
});
