module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@api": "./src/api",
            "@redux": "./src/redux",
            "@navigation": "./src/navigation",
            "@assets": "./assets",
            "@types": "./@types",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
