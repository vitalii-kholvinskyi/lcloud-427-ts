// Check bucket specified
if(!process.argv[3]){
    console.error('ERROR: Please specify bucket name.');
    process.exit(1);
}

// Check file specified
if(!process.argv[4]){
    console.error('ERROR: Please specify file.');
    process.exit(1);
}

const fs = require('fs');

// Check file exists
if(!fs.existsSync(process.argv[4])){
    console.error('ERROR: File "'+process.argv[4]+'" does not exists');
    process.exit(1);
}

const AWS  = require('aws-sdk');
const {accessKeyID, secretAccessKey} = require('./access.js');
const name = process.argv[3];
const s3   = new AWS.S3({
    region:          'eu-west-1',
    accessKeyId:     accessKeyID,
    secretAccessKey: secretAccessKey,
});

// Read file
fs.readFile(process.argv[4], (err, data)=>{
    if(err){throw err;}

    s3.putObject({Bucket: process.argv[3], Body: data, Key: process.argv[3].split('.').pop()}, (error, data)=>{
        if(error){throw error;}
        console.log('File uploaded successfully');
    })
})
