const gulp = require("gulp");

//html处理

const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html" , function () {
    return gulp.src("*.html")
    .pipe(
        htmlmin({
            removeEmptyAttributes:true,
            collapseWhitespace:true,
        })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

//图片处理
gulp.task("images",function () {
    return gulp.src("images/**/*.{jpg,png,gif}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//数据处理
gulp.task("data",function () {
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
    
})


//js处理
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
    
})




//scss处理
const scss =  require("gulp-sass");
const minifycss =  require("gulp-minify-css");
const rename =  require("gulp-rename");

gulp.task("index-scss",function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})
gulp.task("mixin-scss",function(){
    return gulp.src("stylesheet/_mixin.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("_mixin.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})
gulp.task("reset-scss",function(){
    return gulp.src("stylesheet/_reset.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("_reset.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})
gulp.task("shopping-scss",function(){
    return gulp.src("stylesheet/shopping.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("shopping.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})
gulp.task("list-scss",function(){
    return gulp.src("stylesheet/list.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("list.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})
gulp.task("bootstrap",function(){
    return gulp.src("stylesheet/bootstrap.css")
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("bootstrap.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
    
})

gulp.task("build",["copy-html","images","data","scripts","index-scss","mixin-scss","reset-scss","bootstrap","shopping-scss","list-scss"],function(){
    console.log("项目建立成功");
})

//监听
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("images/**/*.{jpg,png,gif}",["images"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch("stylesheet/index.scss",["index-scss"]);
    gulp.watch("stylesheet/shopping.scss",["shopping-scss"]);
    gulp.watch("stylesheet/list.scss",["list-scss"]);

})

//服务器

const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true,
    })
})

gulp.task("default",["server","watch"]);

