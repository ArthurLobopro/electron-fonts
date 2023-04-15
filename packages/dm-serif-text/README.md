# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DMSerifText from "@electron-fonts/dm-serif-text"

window.addEventListener("DOMContentLoaded", () => {
    DMSerifText.inject()
})
```