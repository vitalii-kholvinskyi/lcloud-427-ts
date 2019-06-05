
let message =
`
Too few arguments or unknown action. Please check this help message:

    --help                                - print this message
    --list-s3-bucket ":name"              - list all files in an S3 Bucket ":name"
    --upload-file ":name" "/path/to/file" - upload file to bucket ":name"
    --list-filtered ":name" ":filter"     - list files from ":name" taht match ":filter"
`;
console.log(message);

process.exit();
