// =============================================================
// 2.04 Juniper & Grain Menu
// Paste your /exec web address from the Setup Guide below.
// Write the rest of the JavaScript yourself.
// =============================================================

const API =
  "https://script.google.com/macros/s/AKfycbxEaD6PvdK7gVxKjgbg9te6aDsqqTJmSC-pWe4Zwh-H9MO7H-fCbzHij-2x1Ndkjn79/exec"
const statusMessage = document.getElementById('status')
const menuContainer = document.getElementById('menu')
const filterContainer = document.getElementById('filters')

let allItems = []

// 1. async function loadMenu()
//    fetch the API, check response.ok, return the JSON.

async function loadMenu() {
    const response = await fetch(API)
    if (!response.ok) {
        throw new Error("HTTP" + response.status)
    }
    const items = await response.json()
    return items
}

// 2. async function startMenu()
//    Show a loading message. In try: load the menu, build the
//    buttons, show every item. In catch: show a friendly error.

async function startMenu() {
    statusMessage.textContent = "Loading menu..."
    try {
        allItems = await loadMenu()
        //buildFilters(allItems)
        //showMenu(allItems)
        statusMessage.textContent = ""
    } catch (error) {
        console.error(error)
        statusMessage.textContent = "Sorry, the menu didn't load. Please call is at (732) 555-0187."
    }
}

// 3. function showMenu(items)
//    One heading per category, then a card for each item:
//    photo, name, description, price, popular badge, tags, sold out.

// 4. function buildFilters(items)
//    One "All" button, plus one button per category in the data.
//    A click shows only that category's items.

// 5. Call startMenu() when the page opens.
startMenu()