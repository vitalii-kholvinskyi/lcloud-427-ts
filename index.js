/**
 * Print help message.
 *
 * @return {void}
 */
function printHelpMessage(){
    require('./protected/help-message.js');
}

if(process.argv.length < 3 || process.argv[2] === '--help'){
    printHelpMessage();
}else{
    switch( process.argv[2] ){
        case '--list-s3-bucket': require('./protected/list-s3-bucket.js'); break;
        case '--upload-file':    require('./protected/upload-file.js');    break;
        default: printHelpMessage();
    }
}
