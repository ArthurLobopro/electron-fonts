# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TheNautigal from "@electron-fonts/the-nautigal"

window.addEventListener("DOMContentLoaded", () => {
    TheNautigal.inject()
})
```