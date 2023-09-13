const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;
const sourceExts = [
  'jsx',
  'js',
  'ts',
  'tsx',
  'json',
  'svg',
  'd.ts',
  'mjs',
  'cjs',
].concat(defaultSourceExts);

module.exports = {
  resolver: {
    sourceExts,
  },
};
