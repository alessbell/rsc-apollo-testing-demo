module.exports = (api) => {
  const isTest = api.env("test");

  const testPresets = {
    presets: [
      ["@babel/preset-env", { loose: true }],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
  };

  // Return jest babel presets in test env...
  if (isTest) return testPresets;

  // otherwise return next/babel preset when running the app.
  return { presets: ["next/babel"] };
};
