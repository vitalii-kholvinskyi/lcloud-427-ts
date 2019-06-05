// Check bucket specified
if(!process.argv[3]){
    console.error('ERROR: Please specify bucket name.');
    process.exit(1);
}

const AWS = require('aws-sdk');
const {accessKeyID, secretAccessKey} = require('./access.js');
const name = process.argv[3];
const s3 = new AWS.S3({
    region:          'eu-west-1',
    accessKeyId:     accessKeyID,
    secretAccessKey: secretAccessKey
});

// List all files from S3 bucket
(async ()=>{
    let isTruncated = true, marker;

    while(isTruncated){
        let params = marker ? {Marker: marker, Bucket: name} : {Bucket: name};

        try{
            const response = await s3.listObjects(params).promise();
            isTruncated    = response.IsTruncated;

            response.Contents.forEach(item => console.log(item.Key));

            if(isTruncated){
                marker = response.Contents.slice(-1)[0].Key;
            }
        }catch(err){
            isTruncated = false;
            console.log(err);
        }
    }
})();
