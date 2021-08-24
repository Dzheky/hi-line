// Created by May

export function retrieveHighlights() {
    let highlightList = document.getElementById("highlight-list")

    chrome.storage.sync.get("highlights", ({ highlights }) => {
        if (highlights.length) {
            highlightList.innerHTML = highlights.map(highlight =>
                `<a class="highlight-item" target="_blank" href="${highlight.url}">${highlight.selection}</a>`).join("")
        } else {
            highlightList.innerHTML = `<div>No highlights found</div>`
        }
    })
}

//retrieveHighlights();