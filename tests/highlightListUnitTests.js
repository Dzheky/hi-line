import chrome from 'sinon-chrome'; // from 'sinon-chrome'
import sinon from 'sinon';
import { assert } from 'chai';
// Created by May

import { retrieveHighlights } from './highlightList.js';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const dom = new JSDOM(
    `<html>
     <body>
        <div id="highlight-list"></div>
     </body>
   </html>`,
    { url: 'http://localhost' },
);

describe('highlightList.js', function () {

    before(function () {
        global.chrome = chrome;
    });

    beforeEach(function () {
        global.window = dom.window;
        global.document = dom.window.document;
    });

    it('test chrome.storage.sync.get is called', function () {
        retrieveHighlights();
        assert(chrome.storage.sync.get.withArgs("highlights", sinon.match.any).calledOnce);
    });

    afterEach(function () {
        chrome.flush();
    });

    after(function () {
        delete global.chrome;
    });
});
