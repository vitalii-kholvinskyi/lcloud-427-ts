// Check bucket specified
if(!process.argv[3]){
    console.error('ERROR: Please specify bucket name.');
    process.exit(1);
}

// Check filter cpecified
if(!process.argv[4]){
    console.error('ERROR: Please specify filter.');
    process.exit(1);
}

const {accessKeyID, secretAccessKey} = require('./access.js');
const AWS  = require('aws-sdk');
const s3   = new AWS.S3({
    region:          'eu-west-1',
    accessKeyId:     accessKeyID,
    secretAccessKey: secretAccessKey
});

// List all files from S3 bucket
(async ()=>{
    let params = {
        Bucket: process.argv[3],
        Delete: {
            Objects: [
                {Key: process.argv[4]}
            ]
        }
    };

    s3.deleteObjects(params, (err, data)=>{
        if(err){
            console.log(err, err.stack);
        }else{
            console.log(data);
        }
    });
})();
