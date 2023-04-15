# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FiraSansExtraCondensed from "@electron-fonts/fira-sans-extra-condensed"

window.addEventListener("DOMContentLoaded", () => {
    FiraSansExtraCondensed.inject()
})
```