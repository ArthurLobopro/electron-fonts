# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTSansNarrow from "@electron-fonts/pt-sans-narrow"

window.addEventListener("DOMContentLoaded", () => {
    PTSansNarrow.inject()
})
```