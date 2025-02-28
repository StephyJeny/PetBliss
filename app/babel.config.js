module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './', // ✅ Now '@/components/' correctly maps to 'components/'
          'app': './app', // ✅ Ensures 'app/' can still be used
          'components': './components', // ✅ Allows '@/components/' to work
        },
      },
    ],
  ],
};
