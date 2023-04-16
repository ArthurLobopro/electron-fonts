# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SreeKrushnadevaraya from "@electron-fonts/sree-krushnadevaraya"

window.addEventListener("DOMContentLoaded", () => {
    SreeKrushnadevaraya.inject()
})
```