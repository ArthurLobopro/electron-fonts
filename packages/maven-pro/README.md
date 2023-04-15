# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MavenPro from "@electron-fonts/maven-pro"

window.addEventListener("DOMContentLoaded", () => {
    MavenPro.inject()
})
```