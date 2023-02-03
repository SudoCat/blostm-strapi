const sendgrid = (env) => ({
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'dev@protonmail.com',
            defaultReplyTo: 'dev@protonmail.com',
          },
        },
    },
})

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
    const plugins = {};

    if (env("AWS_ACCESS_KEY_ID", "")) {
        plugins.concat(aws(env))
    }

    if (env("SENDGRID_API_KEY", "")) {
        plugins.concat(sendgrid(env))
    }

    return plugins;
};