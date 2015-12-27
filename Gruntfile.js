module.exports = function(grunt) {
  
  grunt.initConfig({
    
    less: {
      
      development: {
        
        options: {
          
          compress: false
        },
        files: {"./css/styles.css": "./less/import.less"}
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);
};