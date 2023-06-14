process.env.EXPO_ROUTER_APP_ROOT = "../../src/app";
process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET"],
        },
      ],
    ],
  };
};
