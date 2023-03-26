# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## Limitations

These packages may not work in `BrowserWindow` instances that loaded online webpages. That happens because electron by default not allow load local resources in webpages.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FontName from "@electron-fonts/font-name"

window.addEventListener("DOMContentLoaded", () => {
    FontName.inject()
})
```

## Contributing

If you want contribute, follow these steps:

* Download font families on [google fonts](https://fonts.google.com/)
* Run `yarn generate` and inform the font name
* Unzip the font archives and move static font archives to ./packages/font-name/fonts
* Run `yarn update-css` and inform the font name again
* Send a pull request!