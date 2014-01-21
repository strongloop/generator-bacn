'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      livereload: true
    },
    watch: {}
  });

  grunt.registerTask('serve', function () {
    grunt.task.run(['connect:livereload', 'watch']);
  });
};
