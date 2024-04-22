// ==Quantumult X==
// @name         Add User Agent Header
// @namespace    openaiassistant
// @version      1.0
// @description  Add User Agent Header to baidupcs requests
// @match        http://*.baidupcs.com/*
// @match        https://*.baidupcs.com/*
// @grant        none
// ==/Quantumult X==

$task.request.headers['User-Agent'] = 'pan.baidu.com';
$done();
