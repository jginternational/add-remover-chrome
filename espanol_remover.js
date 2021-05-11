function remove_limite() {
    var removable_classes = ["tp-modal", "tp-active", "tp-backdrop"];
    removable_classes.forEach(classid => {
        var elements = document.getElementsByClassName(classid);
        for (let elem of elements) {
            elem.parentNode.removeChild(elem);
        }
    });
    var remove_classes = ["tp-modal-open"];
    remove_classes.forEach(classid=>{
        var elements = document.getElementsByClassName(classid);
        for (let elem of elements) {
            elem.classList.remove(classid);
        }
    });
}
window.setTimeout(() => remove_limite(), 5000);