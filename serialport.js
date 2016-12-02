var serialport = null;
try {
    serialport = require('serialport');
}catch(e){
    
}
module.exports = serialport;
