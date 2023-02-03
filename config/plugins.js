const aws = (env) => ({
    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
    },
})

module.exports = ({ env }) => {
    const aws_access_key_id = env("AWS_ACCESS_KEY_ID", "");

    if (aws_access_key_id) {
        return aws(env);
    } else {
        return {};
    }
};