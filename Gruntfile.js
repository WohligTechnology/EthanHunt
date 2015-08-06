module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        exec: {
            less: {
                command : 'lessc -x less/other.less css/other.css --source-map',
                stdout: true,
                stderr: true
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['exec:less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['exec:less', 'watch']);
};