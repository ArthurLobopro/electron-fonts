# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FiraSansCondensed from "@electron-fonts/fira-sans-condensed"

window.addEventListener("DOMContentLoaded", () => {
    FiraSansCondensed.inject()
})
```