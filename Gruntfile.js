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
                    compress: false,
                },
                files: {
                    './w/w.css': './less/other.less'
                }
            },
            production: {
                options: {
                    sourceMap: false,
                    compress: true
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
                    './bower_components/masonry/dist/masonry.pkgd.min.js',
                    './bower_components/fancyBox/source/jquery.fancybox.pack.js',
                    './js/main.js',
                    './bower_components/less/dist/less.min.js',
                    './bower_components/moment/min/moment.min.js',
                    './bower_components/bootstrap/dist/js/bootstrap.min.js',
                    './bower_components/bootstrap/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    './bower_components/angular/angular.min.js',
                    './bower_components/angular-animate/angular-animate.min.js',
                    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    './lib/js/angular-flexslider.js',
                    './lib/js/angular.rangeSlider.js',
                    './bower_components/angular-bootstrap/ui-bootstrap.min.js',
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
                mangle: false, // Use if you want the names of your functions and variables unchanged
                report: "gzip"
            },
            frontend: {
                files: {
                    './w/w.min.js': ['./w/w.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: true,
                roundingPrecision: -1,
                report: "gzip",
            },
            target: {
                files: {
                    './w/w.min.css': ['./w/w.css']
                }
            }
        },
        compress: {
            css: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: './w',
                src: ['w.min.css'],
                dest: './p',
                ext: '.gz.css'
            },
            js: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: './w',
                src: ['w.min.js'],
                dest: './p',
                ext: '.gz.js'
            }
        },
        ngtemplates: {
            templateviews: {
                option: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives! 
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: './views/**.html',
                dest: './w/template/views.js',
            },
            templatecontent: {
                option: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives! 
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: './views/content/**.html',
                dest: './w/template/content.js',
            },
            templatedirective: {
                option: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives! 
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: './views/directive/**.html',
                dest: './w/template/directive.js',
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less:development'],
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default', ['watch']);
};