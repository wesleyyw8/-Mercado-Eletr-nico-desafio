module.exports = function(grunt){
	grunt.initConfig({
	    less: {
	      	'ui/style.css': ['ui/css/*.less']
	    },
		watch: {
			less: {
	            files: ['ui/css/*.less'],
	            tasks: ["less"],
	            options: {
	                livereload: true
	            }
	        },
			livereload: {
		        options: {
		          livereload: true,
		        },
		        files: ['ui/css/*.less']
			}
		}
	});
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.registerTask('default', ['concat:js','watch']);
	//grunt.registerTask('default', ['concat:js','watch']);
	grunt.registerTask('default', ['less','watch']);

	//grunt.registerTask('default', ['concat']);
};