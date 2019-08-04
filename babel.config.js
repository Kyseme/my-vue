module.exports = {
  presets: [
      '@vue/app',
      require('@babel/preset-env'),
      {
          plugins: [
              require('@babel/plugin-proposal-class-properties'),
              // require('@babel/plugin-syntax-flow'), // not needed, included in transform-flow-strip-types
              require('@babel/plugin-transform-flow-strip-types')
          ]
      }
  ]
};
