module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../js/**/*.js'],  //this is the folder where all JS code should be located.  
            //It looks for ANY file that ends in '.js' in the 'javascripts' folder
      options: {
        predef: ["document", "console", "$" ],  //predefined
        esnext: true,
        globalstrict: true,
        globals: {"CarLot": true, "XMLHttpRequest": true}  //put global variables here ex: {"Sandwich": true}
      }
    },
    sass: {
      dist: {
        files: {
          '../css/quiz.css': '../sass/styles.scss'  
    //this creates a file called main.css FROM sass/main.scss
        }
      }
    },
    watch: {  //this performs the tasks above automatically whenever something is changed.
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);  
//now, just typing 'grunt' will run this and the watch task will take over.
};