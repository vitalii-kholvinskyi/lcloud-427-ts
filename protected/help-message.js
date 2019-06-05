
let message =
`
Too few arguments. Please use one of this:

    --help                     - print this message
    --list-s3-bucket ":name"  - list all files in an S3 Bucket
`;
console.log(message);

process.exit();
