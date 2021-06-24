#!/usr/bin/env node

const program = require('commander');
const { randomNumber, writeBlog } = require('./utils');
const csvParse = require('csv-parser');
const fs = require('fs');

let winningTeam;
let secondPlaceTeam;
let secondPlaceScore;
let totalTeams;
const randomTeam = (teamData: any[]) =>
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
const teamData: any[] = [];
try {
  fs.createReadStream(csv)
    .pipe(csvParse({ skipLines: 1 }))
    .on('data', (data: any) => {
      console.log(data);
      teamData.push(data);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      totalTeams = teamData.length;
      winningTeam = teamData.shift();
      secondPlaceTeam = teamData.shift();

      writeBlog({
        totalTeams,
        winningTeam,
        secondPlaceTeam,
        recommendation,
        venue,
      });
    });
} catch (err) {
  console.log(err);
}
