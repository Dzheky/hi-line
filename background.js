
chrome.runtime.onInstalled.addListener(() => {
    // Uncomment to clear the storage
    // chrome.storage.sync.clear()
    chrome.storage.sync.get('highlights', (storage) => {
        if (!storage.highlights) {
            chrome.storage.sync.set({ highlights: [] })
        }
    })
})

chrome.contextMenus.create({
    "title": "Highlight",
    "contexts": ["selection", "link"],
    "type": "normal",
    "id": "highlight",
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'highlight') {
        chrome.storage.sync.get('highlights', storage => {
            storage.highlights.push({
                url: tab.url,
                selection: info.selectionText,
            })
            console.log(storage.highlights)
            chrome.storage.sync.set({ highlights: storage.highlights })
        })
    }
})