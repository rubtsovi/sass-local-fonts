# Sass local fonts
This mixin will help you to define CSS font families. Just import the `sass-local-fonts.scss` to your SASS root after the defining variables.
### Usage
Define the `$font-families` variable before the importing the mixin. This variable should look like this:
```scss
$font-families: (
    "Muli": ( // define family name
        300: "Muli-Light", // define font-weight and font file name without extension
        400: "muli-regular",
        700: "Muli-ExtraBold",
        formats: eot ttf woff woff2 // define here which extensions you have; default eot ttf woff woff2
    ) // ...and so on. Add as many families as you need
)
```
By default mixin searches the fonts in `../fonts` folder relatively to style root file, so if you store fonts in another folder, just define the `$sass-local-font-folder` variable before mixin's import.
Check an example in repo.
