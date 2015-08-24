module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    sass: {
      styles: {
        options: {
          outputStyle: 'compressed'
        },
        src: 'styles.scss',
        dest: 'styles.css'
      }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', ['jshint']);

};