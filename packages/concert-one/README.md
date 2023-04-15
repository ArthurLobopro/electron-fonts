# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ConcertOne from "@electron-fonts/concert-one"

window.addEventListener("DOMContentLoaded", () => {
    ConcertOne.inject()
})
```