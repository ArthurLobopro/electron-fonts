# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import YatraOne from "@electron-fonts/yatra-one"

window.addEventListener("DOMContentLoaded", () => {
    YatraOne.inject()
})
```