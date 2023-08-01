module.exports = {
  apps: [
    {
      name: "strapi-app",
      cwd: "/home/TorrensOperator/www/chempha-admin",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
