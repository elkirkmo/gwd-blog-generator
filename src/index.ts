#!/usr/bin/env node
const program = require('commander');
// const blogPost = require('./blogPost');
const { randomNumber } = require('./utils/index.ts');
const csvParse = require('csv-parser');
const fs = require('fs');

console.log('hi');
let winningTeam;
let secondPlaceTeam;
let secondPlaceScore;
let totalTeams;
const randomTeam = (teamData) =>
  teamData[randomNumber(teamData.length)]['Team Name'];
const input = ``;

program
  .version('1.0.0')
  .usage('[options] <keywords>')
  .option('-v --venue <venueName>', 'The name of the venue')
  .option(
    '-r --recommendation <rec>',
    'Recommend something to try at the venue'
  )
  .option('-c --csv [file]', 'The csv file with the scores')
  .parse(process.argv);
const { venue, recommendation, csv } = program.opts();
const teamData = [];
try {
  fs.createReadStream(csv)
    .pipe(csvParse({ skipLines: 1 }))
    .on('data', (data) => {
      console.log(data);
      teamData.push(data);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      totalTeams = teamData.length;
      console.log(totalTeams);
      winningTeam = teamData.shift();
      secondPlaceTeam = teamData.shift();
      console.log(`
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
      };
      
      Shout out to ${randomTeam(
        teamData
      )} for keeping the conversation lively and the drinks flowing.
      
      Congrats to all ${totalTeams} teams, and special thanks to ${venue} for hosting Geeks Who Drink pub trivia. Try a ${recommendation} next time you're around.
      `);
    });
} catch (err) {
  console.log(err);
}
