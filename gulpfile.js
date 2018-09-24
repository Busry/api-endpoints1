gulp.task('travis',['build', 'testserverjs'],function(){
    process.exit(0);
})