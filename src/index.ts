#!/usr/bin/env node

import blogPost from '../blogPost';
import commander, { program } from 'commander';

console.log('hi');

program
  .version('1.0.0')
  .usage('[options] <keywords>')
  .option('-v --venue [string]', 'The name of the venue')
  .option('-c --csv [file]', 'The csv file with the scores')
  .parse(process.argv);

if (!program.args.length) {
  program.help();
} else {
  console.log('Keywords: ' + program.args);
}
