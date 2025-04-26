// ==UserScript==
// @name        Redirect twimg to :orig
// @namespace   https://prometheus-systems.co.za/
// @version     0.0.1
// @description Redirect twimg to :orig
// @author      rwdcameron
// @license     MIT
// @supportURL  mailto:rwd.cameron@prometheus-systems.co.za?Subject=twimg-resizer
// @match       *://pbs.twimg.com/media/*
// @exclude     *://pbs.twimg.com/media/*name=orig
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.hostname === 'pbs.twimg.com') {
        var url = window.location.href;
        url = url.replace(/\?format=/, ".");
        url = url.replace(/\&name=/, ":");
        url = url.replace(/\.(?=[^.]*$)/, "?format=");
        url = url.replace(/(:large|:medium|:small|:orig|:thumb|:360x360|:900x900)/, "");
        window.location.replace(url + "&name=orig");
    }
})();
