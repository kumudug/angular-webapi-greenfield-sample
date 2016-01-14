module.exports = function (grunt) {

    grunt.initConfig({
        wiredep: {
            task: {
                src: ['index.html'],
                overrides: {
                    bootstrap: {
                        main: [
                            "dist/css/bootstrap.min.css",
                            "dist/js/bootstrap.min.js"
                        ]
                    },
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['wiredep']);
}