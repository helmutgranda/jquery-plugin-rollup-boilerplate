module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
    
  ],
  env: {
    test: {
      plugins: [ 'istanbul' ]
    }
  }
};
