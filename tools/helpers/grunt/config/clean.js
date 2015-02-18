module.exports = function(grunt) {

grunt.config('clean', {

  build: {
    options: { force: true },
    src: ['<%= project.paths.build %>/']
  },

  dist: {
    options: { force: true },
    src: ['<%= project.paths.dist %>/']
  },

  reports: {
    options: { force: true },
    src: ['<%= project.paths.reports %>/']
  },

  karma_report_jasmine: {
    options: { force: true },
    src: ['<%= project.paths.reports %>/__jasmine']
  },

  distUnusedFiles: {
    options: { force: true },
    src: [
      '<%= project.paths.dist %>/build.txt',
      '<%= project.paths.dist %>/ng.app.js',
      '<%= project.paths.dist %>/require.build.config.js',

      // TODO: review
      '<%= project.paths.dist %>/app/modules/**/mock/'
    ]
  }

});

};
