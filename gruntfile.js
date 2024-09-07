module.exports = function(grunt) {
    grunt.initConfig({
        inlinecss: {
            main: {
                options: { 
                    'preserveFontFaces': 'true',
                    'preserveMediaQueries': 'true',
                    'preserveImportant':'true', 
                },
                files: {
                    'out.html': 'index.html',
                }
            }
        }
    })
    
        grunt.loadNpmTasks('grunt-inline-css');
        grunt.registerMultiTask('inlinecss', ['inlinecss']);
};