# Laravel-mix

https://laravel-mix.com

An elegant wrapper around Webpack for the 80% use case.

Mise en place d'un projet :
- mkdir front folder (in theme)
- npm i -y (init projet)
- npm i laravel-mix --save-dev
- cp node_modules/laravel-mix/setup/webpack.mix.js ./

Création de la structure du projet
voir template

Personnalisation du bundler au sein du webpack.mix.js
voir proposition
+ api mix

## Utilisation
ajouter les scripts au package.json

```
"scripts": {
    "dev": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
```

utiliser watch
