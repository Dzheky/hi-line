const { retrieveWebsiteNameFromUrl } = require('./utils.js')

describe('retrieveWebsiteNameFromUrl function', () => {
    it('Should return correct host of the url', () => {
        expect(retrieveWebsiteNameFromUrl('https://hello.world/sdfdsf/sdf/sdf/sdf/')).toBe('hello.world')
    })
})