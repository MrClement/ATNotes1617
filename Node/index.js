const program = require('commander');

program.command('hello').description('Greet user').option('-s, --spanish', 'Speak spanish')
       .option('-n, --number <int>', 'Times to repeat')
       .action(function(options) {i
            var num = options.number ? options.number : 1;
            for(var i = 0; i < num; i++) {
                if(options.spanish) {
                    console.log("Hola");
                } else {
                    console.log("Hi");
                }
            }
       });
program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

