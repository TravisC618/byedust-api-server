module.exports = {
  apps: [
    {
      name: "handy-booking-server",
      script: "./src/index.js",
      args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 4000,
        DB_HOST: "localhost",
        DB_PORT: 27017,
        DB_DATABASE: "handy-booking-app"
      },
      env_production: {
        NODE_ENV: "production",
        DB_USER: "admin",
        DB_PASSWORD: "project3",
        DB_HOST: "cluster0-rkmho.mongodb.net",
        DB_DATABASE: "handy-booking-app",
        JWT_KEY:
          "jYa88LWNX2t3wlHhZMCHJyb7BBKZ_mGvEwfb2evgWvTpSjkWW-GSw8n-Qa2wGmDXFeeqp579DJCJ_6esveCct0k2G1koppXVpMTYa_rokq32MMe0VFSYcpVwxTT7a"
      }
    }
  ]

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
