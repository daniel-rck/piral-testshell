# piral-testshell

> node v18.14.0

- Execute `npm i` and `npm run start` -> working
- Now add `createNgApi()` to `plugins.ts`
- Add importmaps to `package.json`:

```json
  "importmap": {
    "imports": {
      "@angular/common": "",
      "@angular/compiler": "",
      "@angular/core": "",
      "@angular/platform-browser": "",
      "@angular/platform-browser-dynamic": "",
      "piral-ng/common": "",
      "rxjs": "",
      "zone.js": ""
    }
```


- Execute `npm run start` again and see error in browser console:

```
application_init.ts:95 Uncaught TypeError: Cannot read properties of undefined (reading 'ɵfac')
    at <static_initializer> (application_init.ts:95:35)
    at application_init.ts:94:1
    at index.tsx:25:20
<static_initializer>	@	application_init.ts:95
(anonymous)	@	application_init.ts:94
(anonymous)	@	index.tsx:25
```