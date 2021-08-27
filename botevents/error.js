const index = require('./../index.js');
const client = index.client;
const channel = client.channels.cache.get(index.channelID);
const errorLogs = index.log4js.getLogger("Errors");

module.exports = { 
    name: 'error',
    runOnce: false,
    execute(err) {
        console.log('Error attempting to reconnect: ' + err + '.');
        errorLogs.error('Error attempting to reconnect: ' + err + '.')
        channel.send('**BOT WAS KICKED, IT WILL REBOOT IN 75s**')
        setTimeout(function(){ 
            console.log('Shutting down for automatic relog')    
            channel.send('**SHUTTING DOWN FOR RELOG**')  
            process.exit()
        }, 75000);
    }
}