//экспорт дефолтных методов галпа
const { src, dest, parallel, series, watch } = require('gulp');
//установленные модули
const sass = require('gulp-sass')(require('sass'));//препроцессор
const notify = require('gulp-notify');//оповещение об ошибках в scss
const autoprefixer = require('gulp-autoprefixer');//автопрефиксер
const sourcemaps = require('gulp-sourcemaps');// отслеживание ошибок в разных файлах
const browserSync = require('browser-sync').create(); //браузерсинк - автоперезагрузка браузера
const fileInclude = require('gulp-file-include'); // позволяет вкладывать файлы друг в друга
const svgSprite = require('gulp-svg-sprite');// работа с свг-спрайтами
const ttf2woff = require('gulp-ttf2woff'); //конвертация шрифта
const ttf2woff2 = require('gulp-ttf2woff2'); //конвертация шрифта
const del = require('del');//удаление папки app после запуска галп
const webpack = require('webpack');
const webpackStream = require('webpack-stream');// слежение за js фалами
const tinyPng = require('gulp-tinypng-compress'); //сжатие фотографий в build-версии

//функция для конвертации шрифтов и перегонки шрифтов
const fonts = () => {
  src('./src/fonts/**.ttf')
    .pipe(ttf2woff())
    .pipe(dest('./app/fonts/'))
  return src('./src/fonts/**.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('./app/fonts/'))
}
//функция для работы с свг-спрайтами
const svgSprites = () => {
  return src('./src/img/**.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('./app/img'))
}
//функция для scss
const styles = () => {
  return src('./src/scss/**.scss')
    .pipe(sourcemaps.init())//начало отслеживание ошибок в разхных вайлах scss
    .pipe(sass().on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('.')) //отслеживание ошибок в разхных вайлах scss
    .pipe(dest('./app/css'))
    .pipe(browserSync.stream()) //отслеживание файлов в реальном времени
}

//функция для работы с html
const htmlInclude = () => {
  return src(['./src/*.html'])
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream()); //отслеживание файлов в реальном времени
}
//простая перегонка картинок для dev-версии (в процессе разработки)
const imgToApp = () => {
  return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg','./src/img/**.svg'])
    .pipe(dest('./app/img'))
}
//функция для подлкючения swiper (простая перегонка)
const swipertToApp = () =>{
  return src('./src/swiper/**.*')
  .pipe(dest('./app/swiper'))
};
//функция для подлкючения библиотеки для полузунка в каталоге
const noUiSliderToApp = () =>{
  return src('./src/noUiSlider/**.*')
  .pipe(dest('./app/noUiSlider'))
};
//функция для удаления папки app
const clean = () => {
  return del(['./app/*'])
}

//функция для работы со скриптами
const scipts = () => {
  return src('./src/js/main.js')
    .pipe(webpackStream({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());
}

//поделючение нормалайз к проекту
const normalizeToApp = () => {
  return src('./src/normalize/normalize.css')
    .pipe(dest('./app/css/'))
}
//подключение валидыции формы к проету
const formValidateToApp = () =>{
  return src('./src/formValidate/*.js')
  .pipe(dest('./app/formValidate'))
}

//функция для слежения за файлами 
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './app' //базовый сервер для слежения установлен за всей папкой app
    }
  });
  //watch - дефолтный метод галпа
  watch('./src/scss/**/*.scss', styles);//как только будут изменения в стилях, вызовется функция styles
  watch('./src/htmlPartials/*.html', htmlInclude);
  watch('./src/*.html', htmlInclude);
  watch('./src/img**.jpg', imgToApp);
  watch('./src/img**.png', imgToApp);
  watch('./src/img**.jpeg', imgToApp);
  watch('./src/img**.svg', svgSprites);
  watch('./src/fonts/**.ttf', fonts);
  watch('./src/js/**/*.js', scipts);
}

//делаем функции тасками
exports.styles = styles;
exports.fileInclude = htmlInclude;
exports.fonts = fonts;
exports.clean = clean;
exports.normalizeToApp = normalizeToApp;
exports.formValidateToApp = formValidateToApp;
exports.swipertToApp = swipertToApp;
exports.noUiSliderToApp = noUiSliderToApp; 
exports.watchFiles = watchFiles;

//в дефолтном таске мы используем функции(вызываются первый раз перед вотчингом)
exports.default = series(clean, parallel(htmlInclude, scipts,swipertToApp,noUiSliderToApp,formValidateToApp, fonts, imgToApp, svgSprites), styles, normalizeToApp,watchFiles);
//код для build-версии
//функция для работы со скриптами
const sciptsBuild = () => {
  return src('./src/js/main.js')
    .pipe(webpackStream({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(dest('./app/js'))
}

//функция для scss
const stylesBuild = () => {
  return src('./src/scss/**.scss')
    .pipe(sass().on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./app/css'))
}
//сжатие фотографий
const tinypng = () => {
  return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
    .pipe(tinyPng({
      key: 'JS9MWwCflHycV1FDcSlkjZ8GGjTfttNw',
      log: true
    }))
    .pipe(dest('./app/img'))
}
//dev-сборка
exports.build = series(clean, parallel(htmlInclude, sciptsBuild,swipertToApp,noUiSliderToApp,formValidateToApp, fonts, imgToApp, svgSprites), stylesBuild,normalizeToApp, tinypng);