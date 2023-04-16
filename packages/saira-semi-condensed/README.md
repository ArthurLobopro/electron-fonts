# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SairaSemiCondensed from "@electron-fonts/saira-semi-condensed"

window.addEventListener("DOMContentLoaded", () => {
    SairaSemiCondensed.inject()
})
```