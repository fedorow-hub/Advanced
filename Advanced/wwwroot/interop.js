function addTableRows(colCount, elem) {
    let row = document.createElement("tr");
    elem.parentNode.insertBefore(row, elem);
    for (let i = 0; i < colCount; i++) {
        let cell = document.createElement("td");
        cell.innerText = "New Elements"
        row.append(cell);
    }
}

//function addTableRows(colCount) {
//    let elem = document.querySelector("tbody");
//    let row = document.createElement("tr");
//    elem.append(row);
//    for (let i = 0; i < colCount; i++) {
//        let cell = document.createElement("td");
//        cell.innerText = "New Elements"
//        row.append(cell);
//    }
//}

//function createToggleButton()
function createToggleButton(toggleServiceRef) {
    let sibling = document.querySelector("button:last-of-type");
    let button = document.createElement("button");
    button.classList.add("btn", "btn-secondary", "btn-block");
    button.innerText = "JS Toggle";
    sibling.parentNode.insertBefore(button, sibling.nextSibling);
    button.onclick = () => toggleServiceRef.invokeMethodAsync("ToggleComponents");
    //button.onclick = () => DotNet.invokeMethodAsync("Advanced", "ToggleEnabled");
}