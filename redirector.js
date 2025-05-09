// ==UserScript==
// @name         Redirect twimg to :orig
// @namespace    https://prometheus-systems.co.za/
// @version      0.0.5
// @description  Redirect twimg image URLs to enforce name=orig for full-resolution images
// @author       rwdcameron
// @license      GPLv2
// @supportURL   mailto://rwd.cameron@prometheus-systems.co.za?Subject=twimg-resizer
// @match        *://pbs.twimg.com/media/*
// @exclude      *://pbs.twimg.com/media/*?*name=orig*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/prometheus-systems-tech/Redirect-twimg-to-orig/refs/heads/main/redirector.js
// @downloadURL  https://raw.githubusercontent.com/prometheus-systems-tech/Redirect-twimg-to-orig/refs/heads/main/redirector.js
// ==/UserScript==

(function () {
    'use strict';

    const url = new URL(window.location.href);

    // Do nothing if name=orig is already in the URL
    if (url.searchParams.get('name') === 'orig') return;

    // Replace existing name=... with name=orig or add it if not present
    url.searchParams.set('name', 'orig');

    // Redirect to the corrected URL
    window.location.replace(url.toString());
})();
