module.exports = (function() {

  var path = require('path');
  var pkg = require('../package');

  //---

  var config = {};

  //--

  config.root = './';

  //--

  config.packages = [
    './package.json'
  ];

  //---

  var bannerTitle = pkg.title || pkg.name;

  config.banner =
    '/*!\n' +
    ' * ' + bannerTitle + '\n' +
    ' * ' + pkg.description + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' * v' + pkg.version + '\n' +
    ' */\n';

  //---

  config.paths = {
    src: 'src',
    build: '.temp',
    dist: 'dist'
  };

  //---

  config.js = {

    project: {
      lint       : [
        config.paths.src + '/**/*.js',
        '!' + config.paths.src + '/vendor/**/*.js'
      ],
      watch      : [
        config.paths.src + '/**/*.js',
        '!' + config.paths.src + '/vendor/**/*.js',
        '!' + config.paths.src + '/{app,shared}/*{,*/**}/tests/**/*.js'
      ],
      copy2build : [
        config.paths.src + '/**/*.js',
        '!' + config.paths.src + '/require.unit.load.js',
        '!' + config.paths.src + '/**/package.unit.js',
        '!' + config.paths.src + '/vendor/**/*.js',
        '!' + config.paths.src + '/{app,shared}/*{,*/**}/tests/**/*.js'
      ]
    },

    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ]

  };

  //---

  var stylefilename = 'app';

  config.styles = {
    sass: {
      main    : config.paths.src + '/scss/' + stylefilename + '.scss',
      project : config.paths.src + '/{app,scss,shared}/**/*.sass'
    },
    less: {
      main    : config.paths.src + '/less/' + stylefilename + '.less',
      project : config.paths.src + '/{app,less,shared}/**/*.less'
    }
  };

  //---

  config.autoprefixer = {
    browsers: [
      'last 2 versions', 'last 4 Android versions'
    ]
  };

  //---

  config.html = {
    index: config.paths.src + '/index.html',
    files: config.paths.src + '/**/*.html'
  };

  config.htmlmin = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  };

  //---

  config.require = {
    mainModule: 'ng.app',
    excludeModule: 'require.config.js',
    config: path.join(config.paths.src, 'require.config.js'),
    build: path.join(config.paths.build, 'require.config.js')
  };

  //---

  config.webserver = {
    port: 1337,

    // https://github.com/nodejitsu/node-http-proxy#options
    // https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    proxies: [
      {
        host: 'localhost',
        port: 9000,
        context: 'rest'
      }
    ]
  };

  //---

  return config;

})();
