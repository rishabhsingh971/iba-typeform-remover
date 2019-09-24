// ==UserScript==
// @name         Interviewbit Academy Typeform remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  remove annoying typeform from interviewbit academy pages!
// @author       rishabhsingh971
// @match        https://www.interviewbit.com/academy/*
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
