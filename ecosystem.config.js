module.exports = {
  apps: [
    {
      name: "NodeGuardian",
      script: "./src/index.js",
      instances: "max",
      autorestart: true,
      watch: true,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
