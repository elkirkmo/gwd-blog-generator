exports.randomNumber = (max: number) => Math.floor(Math.random() * max);

type Team = {
  Total: number;
  'Team Name': string;
};

interface blogArgs {
  totalTeams: number;
  venue: string;
  winningTeam: Team;
  secondPlaceTeam: Team;
  recommendation: string;
}
exports.writeBlog = ({
  totalTeams,
  venue,
  winningTeam,
  secondPlaceTeam,
  recommendation,
}: blogArgs) => {
  return `
      ${totalTeams} teams showed up to ${venue}, but only one could survive the quizzery and tomfoolery to emerge as the true champion.
      Many guesses (some educated) were made, and the field was very competitive, but the brainest brain of the night went to ${
        winningTeam['Team Name']
      } who garnered ${winningTeam['Total']} overall.
      Narrowly edging out the competition was ${
        secondPlaceTeam['Team Name']
      }, who were only ${
    winningTeam['Total'] - secondPlaceTeam['Total']
  } total points shy of ${winningTeam['Team Name']} with ${
    secondPlaceTeam['Total']
  }.
      Shout out to ${randomTeam(
        teamData
      )} for keeping the conversation lively and the drinks flowing.
      Congrats to all ${totalTeams} teams, and special thanks to ${venue} for hosting Geeks Who Drink pub trivia. Try a ${recommendation} next time you're around.
      `;
};
