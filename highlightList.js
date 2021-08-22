let highlightList = document.getElementById("highlight-list")

const rerender = (highlights) => {
    if (highlights.length) {
        highlightList.innerHTML = highlights.map((highlight, id) => {
            console.error(JSON.stringify(highlight))
            return `
<div class="highlight-item" id="${id}">
    <div class="highlight-item-header-container">
        <a class="highlight-item-title" target="_blank" href="${highlight.url}">${retrieveWebsiteNameFromUrl(highlight.url)}</a>
        <time>${new Intl.DateTimeFormat('en-US').format(new Date(highlight.time))}</time>
    </div>
    <div class="highlight-item-highlight">${highlight.selection}</div>
    <button class="highlight-item-button" id="${id}">delete</button>
</div>
`
        }).join("")
    } else {
        highlightList.innerHTML = `<div id="highlight-list-no-item">No highlights found</div>`
    }
}

chrome.storage.sync.get("highlights", ({ highlights }) => {
    rerender(highlights)
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('highlight-list').addEventListener('click', (e) => {
        if (e.target.className === 'highlight-item-button') {
            chrome.storage.sync.get("highlights", ({ highlights }) => {
                const filteredHighlights = highlights.filter((_, id) => id !== +e.target.id)
                rerender(filteredHighlights)
                chrome.storage.sync.set({ highlights: filteredHighlights })
            })
        }
    })
});