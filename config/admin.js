module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '475e766410524d10bc9e78d9ad176027'),
  },
});
