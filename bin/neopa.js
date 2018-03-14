#!/usr/bin/env node

var nopt       = require('nopt');
var update     = require('update-notifier');
var pkg        = require('../package.json');
var neopa = require('../lib');

// Options that can be passed to commands
var options = {
  "framework": String,
  "template": String,
  "directory": String
}

// Shorthands for the above commands
var shorthands = {
  "v": "--version",
  "f": "--framework",
  "t": "--template",
  "d": "--directory"
}

var parsed = nopt(options, shorthands);

// cmd.args contains basic commands like "new" and "help"
// cmd.opts contains options, like --libsass and --version
var cmd = {
  args: parsed.argv.remain,
  opts: parsed
}

// Check for updates once a day
var notifier = update({
  packageName: pkg.name,
  packageVersion: pkg.version
});
notifier.notify();

// No other arguments given
if (typeof cmd.args[0] === 'undefined') {
  // If -v or --version was passed, show the version of the CLI
  if (typeof cmd.opts.version !== 'undefined') {
    process.stdout.write("Neopa CLI version " + require('../package.json').version + '\n');
  }
  // Otherwise, just show the help screen
  else {
    neopa.help();
  }
}

// Arguments given
else {
  // If the command typed in doesn't exist, show the help screen
  if (typeof neopa[cmd.args[0]] == 'undefined') {
    neopa.help();
  }
  // Otherwise, just run it already!
  else {
    // Every command function is passed secondary commands, and options
    // So if the user types "neopa new myApp --edge", "myApp" is a secondary command, and "--edge" is an option
    neopa[cmd.args[0]](cmd.args.slice(1), cmd.opts);
  }
}
