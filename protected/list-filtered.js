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
    let isTruncated = true;

    while(isTruncated){
        let params = {Marker: process.argv[4], Bucket: process.argv[3]};

        try{
            const response = await s3.listObjects(params).promise();
            isTruncated    = response.IsTruncated;

            response.Contents.forEach(item => console.log(item.Key));
        }catch(err){
            isTruncated = false;
            console.log(err);
        }
    }
})();
