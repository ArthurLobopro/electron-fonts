# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EduSABeginner from "@electron-fonts/edu-sa-beginner"

window.addEventListener("DOMContentLoaded", () => {
    EduSABeginner.inject()
})
```