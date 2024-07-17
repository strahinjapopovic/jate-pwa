# jate-pwa

## Jast Another Text Editor ( JATE ) and Progressive Web Application ( PWA )

### JATE is text editor incorporating some of the PWA technologies like Workbox Service Proxy Worker helping with page-cache and static-resources management and Webpack configuration generator for Manifest.json and ./dist directory builder.

[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 

![node version](https://img.shields.io/badge/v22-node-blue?logo=nodedotjs) ![express version](https://img.shields.io/npm/v/express?logo=express&label=Express.js&labelColor=grey&color=blue) ![npm version](https://img.shields.io/badge/version-v10.5.1-npm.svg?style=flat&logo=npm&label=npm&labelColor=grey&color=red) ![webpack version](https://img.shields.io/npm/v/webpack?logo=webpack&label=webpack%20npm) ![workbox npm plugin](https://img.shields.io/npm/v/workbox-webpack-plugin?logo=npm&label=workbox-webpack-plugin) ![IndexedDB idb-version](https://img.shields.io/npm/v/idb?logo=npm&label=IndexedDB-idb)

![JATE App](./images/JATE-screenshot-main-bord.png)

## Table of Content

- [Description Info](#description-info)
- [Working with cache](#working-with-cache)
- [Service Worker (Proxy Web Worker)](#service-worker-proxy-web-worker)
- [Installation Process](#installation-process)
- [License](#license)
- [Questions and Contacts](#questions-and-contacts)

## Description Info

### This is single-page application that runs in the client browser. Program `jate-pwa` when runned generates manifest file (`manifest.json`) and proxy web worker (`workbox service worker`) from configurations files (`webpac.config.js` and `src-sw.js`) and deployes it as PWA JATE text editor application with ability to uses the in-app installation UI. Image showed bellow.

## Working with cache

While using the browser on network and wisiting sites and online applications, browser stores temporary data and information as local storage data collection that are called cache. Cache or local stored data help current application to manage resources much faster by retriving data localy then to requesting data allways from remote server on the network. This is possible only for resources already been stored and maintained localy. Image showed bellow.

[<img src="./images/request-cache.png" height="300" alt="Request-Cache model." />](./images/request-cache.png) [<img src="./images/cache-serve-local.png" height="300" alt="Cache serve localy." />](./images/cache-serve-local.png)

On the first image first request from the client goes to the remote server and requests resources and data, then grtting back to the client browser and application and do additional processing of the request, transform data for local storage, so same requests later serve from local cache.  

## Service Worker (Proxy Web Worker)

A Service Worker is a type of web worker that runs in the background of a web application, independent of the web page's main thread. They allow developers to build offline web applications, load faster, and provide a more reliable user experience.

[<img src="./images/service-worker.jpg" height="300" alt="Service Worker Model (Proxy Web Worker)" />](./images/service-worker.jpg)

## Installation Process

To initialize package.json and to install dir node_packages over Git Bash terminal in the root dir (`~/jate-pwa/app>`) run

```bash
$ npm init # initialize formating file ./package.json OR if .json already exists just

$ npm install # installing formating dir ./node_packages
```
After installing packages within root directory (`~/jate-pwa/app>`) run the following command to start (triger) `build` process 

```bash
$ npm run start:development # development mode 
```
### Output at terminal console after running script for development

[<img src="./images/run-dev-output-bord.png" width="" alt="Git Bash output console." />](./images/run-dev-output-bord.png)

OR alternatively,

```bash
$ npm run start:production # production mode
```
### Output at terminal console after running script for production

[<img src="./images/run-prod-output-bord.png" width="" alt="Git Bash output console." />](./images/run-prod-output-bord.png)

Available scripts can be found at `package.json` file at client directory at `~/app/client/package.json>` file.

```json
"scripts": {
    "start:development": "concurrently \"cd ./server && npm run server\" \"cd ./client && npm run development\"",
    "start:production": "concurrently \"cd ./server && npm run server\" \"cd ./client && npm run production\""
  }
```
## License

Copyright © 2024, [codexdev](https://github.com/strahinjapopovic). Released under the [MIT License](./LICENSE).

<a id="questions-and-contacts"></a>
## Questions and Contacts

Questions about application can be reffered to the author's [GitHub account](https://github.com/strahinjapopovic) or you can [Contact Me](mailto:spope.mails@gmail.com) directly over an email.