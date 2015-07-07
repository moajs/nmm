#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .command('init [otherDirs...]')
  .action(init)
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

function init(){
  
  require('shelljs/global');
  
  if (!which('git')) {  
    echo('Sorry, this script requires git');  
    exit(1);
  }
  
  // Run external tool synchronously
  if (exec('git commit -am "Auto-commit"').code !== 0) {
    echo('Error: Git commit failed');
    exit(1);
  }
  
  var clone = 'git clone --depth=1 https://github.com/moajs/nmm-tmpl'
  // Run external tool synchronously
  if (exec(clone).code !== 0) {
    echo('Error: Git clone failed');
    exit(1);
  }else{
    echo('Success: exn clone finished!');
  }
  
  var clone_post = 'rm -rf nmm-tmpl/.git && cp -rf nmm-tmpl/* . && rm -rf nmm-tmpl';
  if (exec(clone_post).code !== 0) {
    echo('Error: Git clone_post failed');
    exit(1);
  }else{
    echo('Success: exn clone_post finished!');
  }
  
}