# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DelaGothicOne from "@electron-fonts/dela-gothic-one"

window.addEventListener("DOMContentLoaded", () => {
    DelaGothicOne.inject()
})
```