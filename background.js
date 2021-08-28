
chrome.runtime.onInstalled.addListener(() => {
    // Uncomment to clear the storage
    // chrome.storage.sync.clear()
    chrome.storage.sync.get('highlights', (storage) => {
        if (!storage.highlights) {
            chrome.storage.sync.set({ highlights: [] })
        }
    })
})
