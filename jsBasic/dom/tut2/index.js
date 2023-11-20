const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]


const getScoreLine = ({ homeTeam, awayTeam}) => {
    const teamName = `${awayTeam.team} @ ${homeTeam.team}`;
    const scoreLine = awayTeam.points > homeTeam.points? `<b>${awayTeam.points}</b>-${homeTeam.points}`: `${awayTeam.points}-<b>${homeTeam.points}</b>`;
    return `${teamName} ${scoreLine}`;
}

const makeChart = (games, teamInView) => {
    const ul = document.createElement('ul');
    
    for (const game of games) {
        const li = document.createElement('li');

        const { homeTeam, awayTeam } = game;
       
        li.innerHTML = getScoreLine(game)
        const warriors = game.homeTeam.team === teamInView ? homeTeam : awayTeam;
        const className = warriors.isWinner ? 'win': 'loss';

        li.classList.add(className)
        ul.append(li)
    }
    return ul
}

const chart1 = makeChart(warriorsGames, 'Houston')
const chart2 = makeChart(warriorsGames, 'Golden State')
document.body.prepend(chart1)
document.body.prepend(chart2)