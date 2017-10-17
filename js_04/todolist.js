btn_add.addEventListener("click", function() {
    var new_task = document.createElement("li");

    if (task.value.length < 1) {
        return;
    }


    new_task.innerHTML = task.value;
    tasks.appendChild(new_task);
    task.value = "";
    new_task.addEventListener("click", done, false);
}, false);

btn_done.addEventListener("click", allDone, false);

function done(e) {
    e.target.style.textDecoration = "line-through";
}


function allDone() {
    if (tasks.children.length < 1) {
        return;
    }
    for (var i = 0; i < tasks.children.length;i++) {
        var item = tasks.children[i].style;
        if (item.textDecoration == "line-through") {
            item.textDecoration == "underline";
        }
        else {
            item.textDecoration = "line-through";
        }
    }
}
