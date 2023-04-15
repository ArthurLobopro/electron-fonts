# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Engagement from "@electron-fonts/engagement"

window.addEventListener("DOMContentLoaded", () => {
    Engagement.inject()
})
```