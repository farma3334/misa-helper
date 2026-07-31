"use strict";
var MISA;
(function (MISA) {
    MISA.THEME = 'dark';
    MISA.BOT_NAME = 'MISA HELPER';
    MISA.PREFIX = '+';
    function addClass(element, cls) {
        element.classList.add(cls);
    }
    MISA.addClass = addClass;
    function onLoad(cb) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', cb);
        }
        else {
            cb();
        }
    }
    MISA.onLoad = onLoad;
    function setStatusDot(color) {
        const dot = document.querySelector('.status-dot');
        if (!dot)
            return;
        dot.style.background = color === 'online' ? '#00ff9d' : '#ff4d6d';
    }
    MISA.setStatusDot = setStatusDot;
})(MISA || (MISA = {}));
/// <reference path="core.ts" />
var MISA;
(function (MISA) {
    const log = [];
    function getUserInput(selector) {
        var _a, _b;
        const el = document.querySelector(selector);
        return (_b = (_a = el === null || el === void 0 ? void 0 : el.value) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
    }
    function getReasonInput(selector) {
        var _a, _b;
        const el = document.querySelector(selector);
        return (_b = (_a = el === null || el === void 0 ? void 0 : el.value) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
    }
    function submitModeration(action, userSelector, reasonSelector, outputSelector) {
        const target = getUserInput(userSelector);
        const reason = getReasonInput(reasonSelector);
        if (!target) {
            alert(`[ERROR] Please provide a user for ${action}.`);
            return;
        }
        const entry = {
            action,
            target,
            reason: reason || 'no reason provided',
            timestamp: Date.now(),
        };
        log.push(entry);
        const output = document.querySelector(outputSelector);
        if (output) {
            const time = new Date(entry.timestamp).toLocaleTimeString();
            output.innerHTML = `<span class="ok">[ OK ]</span>  ${entry.action.toUpperCase()} ${entry.target} — ${entry.reason} @ ${time}`;
        }
    }
    MISA.submitModeration = submitModeration;
    function getLogCount() {
        return log.length;
    }
    MISA.getLogCount = getLogCount;
})(MISA || (MISA = {}));
