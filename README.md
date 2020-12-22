# Valerio Portfolio

My Portfolio Website as Node Application.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```
$ git clone git@github.com:valeriosillari/valerio-portfolio.git # clone repo

$ cd valerio-portolio # enter in the application folder

$ yarn # install packages
```

## Dev Mode

```
$ yarn dev # start the app | Develop mode
```

Your app should now be running on [localhost:9000](http://localhost:9000/).

## Production Mode | Static

```
$ yarn build # build the app | Static Files
```

Static files generated on 'dist' folder.

## ENV Options

You need to set some CONFIG VAR options locally and on Deploy Server for custom Plugins as Analytics.

For detailed explanation on how dotenv work, checkout the [dotenv docs](https://github.com/motdotla/dotenv).

- **ENV_VALERIO_PORTFOLIO_GOOGLE_ANALYTICS** : google analytics

## Technologies

- [Node JS](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Babel JS](https://babeljs.io/)
- [Gulp JS](http://gulpjs.com/)
- [Web Pack](https://webpack.js.org/)
- [Sass](http://sass-lang.com/)
- [Pug JS](https://pugjs.org/)
- [ES Linter](https://eslint.org/)
- [Prettier](https://prettier.io/)

## TODO (nice to have or try)

- section better code
- client validation with HTML5 form inputs?
- better js code contact form
- images/logos in readme
- modernizr logic on dev/reload | set workaround but each time script change also modernizr should be inside as required task
- sticky footer? for error page
- remove jQuery?
- Gulp structure more granular and with separate tasks (looping)
- purge css
