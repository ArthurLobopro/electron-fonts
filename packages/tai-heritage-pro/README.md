# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TaiHeritagePro from "@electron-fonts/tai-heritage-pro"

window.addEventListener("DOMContentLoaded", () => {
    TaiHeritagePro.inject()
})
```