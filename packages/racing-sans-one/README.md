# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RacingSansOne from "@electron-fonts/racing-sans-one"

window.addEventListener("DOMContentLoaded", () => {
    RacingSansOne.inject()
})
```