/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "myomyintaungblog",
        mongodb_password: "w5hecfyxLZW6GwFG",
        mongodb_cluster: "cluster0.0jzwo",
        mongodb_database: "blog-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "myomyintaung",
      mongodb_password: "HhHrhgpbfij5zp5g",
      mongodb_cluster: "cluster0.zq497",
      mongodb_database: "blog",
    },
  };
};
