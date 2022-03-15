
const cron = require('node-cron');
const process = require('process');
const main = require('./index')
process.title = 'daily-email'

// console.log("process id is " + process.pid,process.title);




const task = cron.schedule(process.env.TIME, function () {
  try {
    main()

  } catch (error) {
    console.log(error)
  }


}, { scheduled: false });
module.exports = task
