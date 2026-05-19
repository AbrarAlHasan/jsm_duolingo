const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config, {
  inlineVariables: false,
  // Required so className works on View, Text, etc. from react-native
  globalClassNamePolyfill: true,
});
