const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant/index');

(async () => {
    await imagemin(['images/*.png'], 'build/images', {
        plugins: [
            imageminPngquant ()
        ]
    });

    console.log('Images optimized');
})();