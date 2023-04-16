# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PadyakkeExpandedOne from "@electron-fonts/padyakke-expanded-one"

window.addEventListener("DOMContentLoaded", () => {
    PadyakkeExpandedOne.inject()
})
```