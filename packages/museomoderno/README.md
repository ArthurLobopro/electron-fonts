# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MuseoModerno from "@electron-fonts/museomoderno"

window.addEventListener("DOMContentLoaded", () => {
    MuseoModerno.inject()
})
```