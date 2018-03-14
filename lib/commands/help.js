var colors = require('colors');

var helpText = {
  // Each command is an array of strings
  // To print the command, the array is joined into one string, and a line break is added
  // between each item. Basically, each comma you see becomes a line break.
  'default': [
    'Commands:',
    '  new'.cyan + '       Create a new Neopa project',
    '  update'.cyan + '    Update an existing Neopa project',
    '  help'.cyan + '      Show this screen',
    '  -v'.cyan + '        Display the CLI\'s version',
    '',
    'To learn more about a specific command, type ' + 'neopa help <command>'.cyan
  ],
  'new': [
    'Usage:',
    '  neopa new ',
    '  neopa new ' + '--framework sites',
    '  neopa new ' + '--directory appname',
    '',
    'Creates a new Neopa project.',
    'Run the command without any flags to get an interactive setup prompt.',
    'You can also manually supply the framework and folder name using the ' + '--framework'.cyan + ' and ' + '--directory'.cyan + ' flags.',
    '  If creating a ' + 'sites'.cyan + ' project, add the ' + '--template'.cyan + ' flag as well. The value can be ' + 'basic'.cyan + ' or ' + 'zurb'.cyan + '.'
  ],
  'update': [
    'Usage:',
    '  neopa update',
    ''
  ],
  'help': [
    'Okay, don\'t get clever. But seriously:',
    '',
    'Usage:',
    '  neopa help',
    '  neopa help <command>',
    '',
    'Type ' + 'neopa help'.cyan + ' to see a list of every command,',
    'or ' + 'neopa help <command>'.cyan + ' to learn how a specific command works.'
  ]
}

module.exports = function(args, options) {
  var say;
  if (typeof args === 'undefined' || args.length === 0) {
    say = 'default'
  } else {
    say = args[0]
  }
  // A line break is added before and after the help text for good measure
  say = '\n' + helpText[say].join('\n') + '\n\n'

  process.stdout.write(say);
}
