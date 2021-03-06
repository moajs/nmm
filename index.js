#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

console.log('nmm is a Node Moa plugin Manager')

program
  .version('0.0.1')
  .command('init [otherDirs...]')
  .action(require('./lib/init'))
  .command('rmdir <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {
    console.log('rmdir %s', dir);
    if (otherDirs) {
      otherDirs.forEach(function (oDir) {
        console.log('rmdir %s', oDir);
      });
    }
  });

program.parse(process.argv);

