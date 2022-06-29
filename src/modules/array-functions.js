
function moveTo(oldIndex, toIndex, array) {
    if(toIndex < 0 || toIndex > array.length-1) {
        return array;
    } else {
        let copy = array;
        copy.splice(toIndex, 0, copy.splice(oldIndex, 1)[0]);
        return copy;
    }
}

function getIndexInNodes(element, elementParent) {
    let nodes = elementParent.childNodes;
    let array = Array.from(nodes);
    return array.indexOf(element);
}

export {moveTo, getIndexInNodes};