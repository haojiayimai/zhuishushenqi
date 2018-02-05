module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "API",
      script    : "server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "23.83.230.144",
	  port : "29571",
      ref  : "origin/master",
      repo : "https://github.com/haojiayimai/zhuishushenqi.git",
      path : "/root",
      "post-setup": "ls -la",
      "post-deploy" : "npm install && npm run build && npm run start:prod",
    }
  }
}
