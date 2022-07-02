

function moveTo(oldIndex, toIndex, array) {

    let newArray = structuredClone(array);

    if(toIndex >= 0 || toIndex < array.length-1) {
        newArray.splice(toIndex, 0, newArray.splice(oldIndex, 1)[0]);
    }

    return newArray;
}

function getIndexInNodes(element, elementParent) {
    let nodes = elementParent.childNodes;
    let array = Array.from(nodes);
    return array.indexOf(element);
}

export {moveTo, getIndexInNodes};