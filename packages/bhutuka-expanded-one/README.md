# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BhuTukaExpandedOne from "@electron-fonts/bhutuka-expanded-one"

window.addEventListener("DOMContentLoaded", () => {
    BhuTukaExpandedOne.inject()
})
```