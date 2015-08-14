//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({
        less: {
            development: {
                options: {
                    sourceMap: true,
                    sourceMapRootpath: '../',
                    sourceMapURL: 'w.css.map',
                    compress: true,
                },
                files: {
                    './w/w.css': './less/other.less'
                }
            }
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: [
                    './bower_components/jquery/dist/jquery.min.js',
                    './js/main.js',
                    './bower_components/less/dist/less.min.js',
                    './bower_components/moment/min/moment.min.js',
                    './bower_components/angular/angular.min.js',
                    './bower_components/ui-router/release/angular-ui-router.min.js',
                    './bower_components/angular-loading-bar/build/loading-bar.min.js',
                    './bower_components/valdr/valdr.min.js',
                    './bower_components/valdr/valdr-message.min.js',
                    './bower_components/lodash/lodash.min.js',
                    './js/app.js',
                    './js/controllers.js',
                    './js/templateservice.js',
                    './js/navigation.js'
                ],
                dest: './w/w.js',
            }
        },
        uglify: {
            options: {
                mangle: false // Use if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    './w/w.min.js': ['./w/w.js']
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['js/*.js'], // which files to watch
                tasks: ['concat'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};