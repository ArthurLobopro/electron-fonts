# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SeymourOne from "@electron-fonts/seymour-one"

window.addEventListener("DOMContentLoaded", () => {
    SeymourOne.inject()
})
```