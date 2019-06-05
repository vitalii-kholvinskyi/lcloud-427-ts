
let message =
`
Too few arguments or unknown action. Please check this help message:

    --help                                - print this message
    --list-s3-bucket ":name"              - list all files in an S3 Bucket
    --upload-file ":name" "/path/to/file" - upload file to bucket
`;
console.log(message);

process.exit();
