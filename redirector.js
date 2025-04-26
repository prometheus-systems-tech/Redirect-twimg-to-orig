// ==UserScript==
// @name        Redirect twimg to :orig
// @namespace   https://prometheus-systems.co.za/
// @version     0.0.1
// @description Redirect twimg to :orig
// @author      rwdcameron
// @license     MIT
// @supportURL  mailto://rwd.cameron@prometheus-systems.co.za?Subject=twimg-resizer
// @match       *://pbs.twimg.com/media/*
// @exclude     *://pbs.twimg.com/media/*name=orig
// @run-at      document-start
// @grant       none
// ==/UserScript==//https://pbs.twimg.com/media/ABC.jpg:large
//https://pbs.twimg.com/media/ABC?format=jpg&name=largevar url = window.document.location + "";
url = url.replace(/\?format=/, ".");
url = url.replace(/\&name=/, ":");
//https://pbs.twimg.com/media/ABC.jpg:large
//https://pbs.twimg.com/media/ABC.jpg:largeurl = url.replace(/\.(?=[^.]*$)/, "?format=");
//https://pbs.twimg.com/media/ABC?format=jpg:largeurl = url.replace( /(:large|:medium|:small|:orig|:thumb|:360x360|:900x900)/, "");
//https://pbs.twimg.com/media/ABC?format=jpgwindow.location.replace( url + "&name=orig" );
//https://pbs.twimg.com/media/ABC?format=jpg&name=orig

