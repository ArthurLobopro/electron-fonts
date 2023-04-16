# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TitilliumWeb from "@electron-fonts/titillium-web"

window.addEventListener("DOMContentLoaded", () => {
    TitilliumWeb.inject()
})
```