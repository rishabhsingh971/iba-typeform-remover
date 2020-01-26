// ==UserScript==
// @name         Interviewbit Academy Typeform remover
// @description  remove annoying typeform from interviewbit academy pages!
// @author       rishabhsingh971
// @namespace    https://github.com/rishabhsingh971
// @version      1.0.1
// @license      MIT
// @downloadURL	 https://github.com/rishabhsingh971/iba-typeform-remover/raw/master/script.user.js
// @updateURL    https://github.com/rishabhsingh971/iba-typeform-remover/raw/master/script.user.js
// @match        https://www.scaler.com/academy/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        const selectors = ['#my-embedded-typeform-lesson-feedback', '.modal-backdrop'];
        for (const selector of selectors) {
            const e = document.querySelector(selector);
            if (e) e.remove();
        }
    }

})();
