'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      livereload: true
    },
    open: {
      local: {
        path: 'http://mobiletest.me/#u=http://localhost:8000'
      }
    },
    watch: {}
  });

  grunt.registerTask('serve', function () {
    grunt.task.run(['connect:livereload', 'watch']);
  });
};
