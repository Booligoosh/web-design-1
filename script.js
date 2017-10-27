var listItems = document.querySelectorAll('header a');

var darkSections = document.querySelectorAll('section.dark');

window.addEventListener("scroll", listItemScroll);

function listItemScroll(evt) {
    listItems.forEach(function (listItem) {
        var listItemOverlapsAny = false;
        darkSections.forEach(function (darkSection) {
            if (isOverlapping(listItem, darkSection)) {
                listItemOverlapsAny = true;
                listItem.style.color = 'white';
            }
        });
        if (!listItemOverlapsAny && listItem.parentElement.className != 'cta') {
            listItem.style.color = 'black';
        }
    });
}

function isOverlapping(elem1, elem2) {
    var rect1 = elem1.getBoundingClientRect();
    var rect2 = elem2.getBoundingClientRect();
    // Overlap detection from https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
    var overlap = !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);
    return(overlap);
}