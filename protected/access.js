const fs  = require('fs');
const env = fs.readFileSync('./access.env');

var res = {}, lines = env.toString().split("\n");

for(var i=0; i<lines.length; i++){
    let parts = lines[i].split(':');

    if(!parts[1] || parts[0].startsWith('#')){
        continue;
    }

    res[parts[0].trim()] = parts[1].trim();
}

// AWS access
module.exports = res;
