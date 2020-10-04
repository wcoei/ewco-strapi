module.exports = ({ env }) => ({
  host: env('STRAPI_HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1a5904aa5752ab3c717bcc3079fa3f96'),
    },
  },
});
