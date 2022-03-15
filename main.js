const cron = require('node-cron');
var spawn = require('child_process').spawn;
var grep = spawn('grep', ['daily-email']);
var ps = spawn('ps', ['a']);
ps.stdout.pipe(grep.stdin);
grep.stdout.on('data', function (data) {
    var arr = data.toString("utf8").trim().split("\n")
     a = arr.length
    // console.log(a)
    if (a === 1) {
        const task = require('./schedule')
        task.start()
        
    }
    else{
        console.log("this service is already running")
    }

});

