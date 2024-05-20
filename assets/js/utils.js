/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
function rgbToHsl(rgb) {
    let ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
    if (ex.test(rgb)) {
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);

        // convert %s to 0–255
        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1) rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
        }

        // make r, g, and b fractions of 1
        let r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            // find greatest and smallest channel values
            cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // calculate hue
        // no difference
        if (delta == 0) h = 0;
        // red is max
        else if (cmax == r) h = ((g - b) / delta) % 6;
        // green is max
        else if (cmax == g) h = (b - r) / delta + 2;
        // blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // make negative hues positive behind 360°
        if (h < 0) h += 360;

        // calculate lightness
        l = (cmax + cmin) / 2;

        // calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return { h, s, l };
    } else {
        return false;
    }
}

/**
 * Calculates the average RGB value of an image.
 *
 * @param {HTMLImageElement} imgEl - The image element to calculate the average RGB value from.
 * @returns {Object} - An object containing the average RGB values as properties: { r: number, g: number, b: number }.
 */
function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement("canvas"),
        context = canvas.getContext && canvas.getContext("2d"),
        data,
        width,
        height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}

/**
 * Formats time in seconds to a human-readable format.
 *
 * @param {number} seconds - The time in seconds.
 * @returns {string} - The formatted time.
 */
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

/**
 * Shuffles an array.
 *
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

/**
 * Changes the favicon to the specified image.
 *
 * @param {string} url - The URL of the image to set as the favicon.
 */
function changeFavicon(url) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
