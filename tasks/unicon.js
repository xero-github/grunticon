/*
 * grunt-unicon
 * https://github.com/filamentgroup/unicon
 *
 * Copyright (c) 2012 Scott Jehl
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('unicon', 'A mystical CSS icon solution.', function() {

    var config = grunt.config.get( "unicon" );

    if( !config || !config.src || !config.dest ){
      grunt.log.write( "Please specify src and dest in your grunt.js configuration" );
      return;
    }

    // Get a valid semver tag from `git describe --tags` if possible.
    grunt.utils.spawn({
      cmd: 'phantomjs',
      args: [
        grunt.task.getFile('unicon/phantom.js'),
        config.src,
        config.dest
      ],
      fallback: ''
    }, function(err, result, code) {
      // TODO boost this up a bit.
      grunt.log.write("done!");
    });


  });
};
