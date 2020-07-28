var gulp = require('gulp');
    sass = require('gulp-sass');
    browserSync = require('browser-sync');

    gulp.task('sass', function() {
        return gulp.src('app/sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('browser-sync', function () {
        browserSync({
            server: {
                baseDir: 'app'
            },
           notify: false
        });

        gulp.watch('app/sass/*.sass', gulp.series('sass'));
    });

    gulp.task('default', gulp.series(['sass', 'browser-sync']));