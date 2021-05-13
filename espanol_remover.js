function remove_limite() {
    var removable_classes = ["tp-modal", "tp-active", "tp-backdrop", "adv", 
    "msg-footer", "article-adv", "st-placement", "sm-ad-container", "article-body__adv"];
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
window.setInterval(() => remove_limite(), 500);