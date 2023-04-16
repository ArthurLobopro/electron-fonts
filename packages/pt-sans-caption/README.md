# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PTSansCaption from "@electron-fonts/pt-sans-caption"

window.addEventListener("DOMContentLoaded", () => {
    PTSansCaption.inject()
})
```