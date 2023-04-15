# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AtkinsonHyperlegible from "@electron-fonts/atkinson-hyperlegible"

window.addEventListener("DOMContentLoaded", () => {
    AtkinsonHyperlegible.inject()
})
```