#!/usr/bin/env node

const program = require('commander');
// const blogPost = require('./blogPost');
const csvParse = require('csv-parse');
const fs = require('fs');

console.log('hi');

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
const winningTeam = 'Floopadoop';
const winningScore = 75;
const secondPlaceTeam = 'Another team';
const secondPlaceScore = 69;
const totalTeams = 9;
const randomTeam = 'Poop';
const input = ``;

fs.createStream(csv);

console.log(venue);
console.log(`
${totalTeams} teams showed up to ${venue}, but only one could survive the quizzery and tomfoolery to emerge as the true champion.

Many guesses (some educated) were made, and the field was very competitive, but the brainest brain of the night went to ${winningTeam} who garnered ${winningScore} overall.

Narrowly edging out the competition was ${secondPlaceTeam}, who were only ${
  winningScore - secondPlaceScore
} shy of ${winningTeam} with ${secondPlaceScore};

Shout out to ${randomTeam} for keeping the conversation lively and the drinks flowing.

Congrats to all ${totalTeams} teams, and special thanks to ${venue} for hosting Geeks Who Drink pub trivia. Try a ${recommendation} next time you're around.
`);
