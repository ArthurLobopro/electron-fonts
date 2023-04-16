# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NoticiaText from "@electron-fonts/noticia-text"

window.addEventListener("DOMContentLoaded", () => {
    NoticiaText.inject()
})
```