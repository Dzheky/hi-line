// Created by May

import chrome from 'sinon-chrome'; // from 'sinon-chrome'
import sinon from 'sinon';
import { assert } from 'chai';
import BackgroundModule from './background.js';

describe('background.js', function () {
    before(function () {
        global.chrome = chrome;
    });

    it('some tests', function () {
        this.background = new BackgroundModule();

        assert(chrome.runtime.onInstalled.addListener.calledOnce);
        assert(chrome.contextMenus.create.calledOnce);
        assert(chrome.contextMenus.onClicked.addListener.calledOnce);
    });

    afterEach(function () {
        chrome.flush();
    });

    after(function () {
        delete global.chrome;
    });
});
