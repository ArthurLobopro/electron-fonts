# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import {{font-name-without-spaces}} from "@electron-fonts/{{package-name}}"

window.addEventListener("DOMContentLoaded", () => {
    {{font-name-without-spaces}}.inject()
})
```