# Djar

Djar is a custom WordPress theme for [Jurnal Aris Ripandi](//ripandi.id). This minimalist theme
created with Timber and TailwindCSS.

## Getting Started

### Installing the Theme

Install this theme as usual, and be sure the Timber plugin is activated. But, make sure you have
installed the plugin for the [Timber Library](https://wordpress.org/plugins/timber-library/)
(and [Advanced Custom Fields](https://timber.github.io/docs/guides/acf-cookbook/#nav)). Do your
thing! And read [the docs](https://github.com/jarednova/timber/wiki).

### What's here?

`static/` is where you can keep your static front-end scripts, styles, or images. In other words, your Sass files, JS files, fonts, and SVGs would live here.

`templates/` contains all of your Twig templates. These pretty much correspond 1 to 1 with the PHP files that respond to the WordPress template hierarchy. At the end of each PHP template, you'll notice a `Timber::render()` function whose first parameter is the Twig file where that data (or `$context`) will be used. Just an FYI.

`bin/` and `tests/` ... basically don't worry about (or remove) these unless you know what they are and want to.

### Compiling resources

```sh
npm install --prefer-offline
npm run build:dev
```

### Other Resources

The [main Timber Wiki](https://github.com/jarednova/timber/wiki) is super great, so reference those often. Also, check out these articles and projects for more info:

* [This branch](https://github.com/laras126/timber-starter-theme/tree/tackle-box) of the starter theme has some more example code with ACF and a slightly different set up.
* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).
* [Timber Video Tutorials](http://timber.github.io/timber/#video-tutorials) and [an incomplete set of screencasts](https://www.youtube.com/playlist?list=PLuIlodXmVQ6pkqWyR6mtQ5gQZ6BrnuFx-) for building a Timber theme from scratch.

## License

Licensed under the terms of [GNU General Public License v3.0][choosealicense].
Please see the [license file](./license.txt) for more information.

[choosealicense]:https://choosealicense.com/licenses/gpl-3.0/
