// ==UserScript==
// @name         下载PT站当页种子
// @namespace    https://github.com/Licsber
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/torrents*
// @grant        none
// @note         2020-10-06 更新为逆序下载 因为有部分置顶种子
// ==/UserScript==

(function () {
    'use strict';

    function sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function downAll () {
        console.log('开始下载')
        var downs = document.getElementsByClassName('download')
        for (var i = downs.length - 1; i >= 0; --i) {
            downs[i].click()
            await sleep(1000)
        }
    }

    var down_btn = document.createElement('a')
    down_btn.innerText = '下载本页所有'
    down_btn.onclick = downAll

    var btns = document.getElementsByClassName('btn')
    var search_btn_parent = btns[btns.length - 1].parentNode
    search_btn_parent.appendChild(down_btn)
})();
