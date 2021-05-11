// assets/app.js
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
require('./styles/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// const $ = require('jquery');

// See https://getbootstrap.com/docs/4.6/getting-started/introduction/#separate
require('popper.js');
require('bootstrap');

import './js/tooltips';

console.log('Hello Webpack Encore! Edit me in assets/app.js');
