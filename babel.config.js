module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      "@babel/plugin-transform-optional-catch-binding",
      // reanimated harus selalu paling bawah
      "react-native-reanimated/plugin", 
  ],
  };
};
