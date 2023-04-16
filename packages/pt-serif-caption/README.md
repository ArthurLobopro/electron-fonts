# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTSerifCaption from "@electron-fonts/pt-serif-caption"

window.addEventListener("DOMContentLoaded", () => {
    PTSerifCaption.inject()
})
```