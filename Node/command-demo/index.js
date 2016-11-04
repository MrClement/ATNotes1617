var program = require('commander');
var unirest = require('unirest');

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

program.command('ip').description('Get my ip address').option('-l, --local', 'My local ip address')
       .action(function(options) {
            if(options.local) {
                var exec = require('child_process').exec;
                exec('ifconfig', function(err, result) {
                    if(err) throw err;
                    var ip = result.match(/en0:[^]+?inet (.+?) netmask/)[1];
                    console.log(ip);
                });     
            } else {
                unirest.get('https://api.ipify.org?format=json').end(function(response) {
                    console.log(response.body.ip);    
                }); 
            }
       });


program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

