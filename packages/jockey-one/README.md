# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JockeyOne from "@electron-fonts/jockey-one"

window.addEventListener("DOMContentLoaded", () => {
    JockeyOne.inject()
})
```