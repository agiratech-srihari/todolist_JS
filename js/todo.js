var inpt = document.getElementById("inpt");
var list = [];
var createcb = '';
var arrdef = {};
var deleteicon = "";
var listadder = "";
var listele = "";
var todolist = document.getElementById("todolist");
var activearr = "";
var showallarr = "";
var optionbutton = document.getElementById("change");
var difopt = document.getElementById("option");
var i = '';


function optionshow() {
    difopt.classList.toggle("showoption");
}

function add() {
    createcb = document.createElement("input");
    createcb.type = "checkbox";
    createcb.id = "checbo";
    createcb.className = "checbo";

    deleteicon = document.createElement("i");
    deleteicon.className = "delete";

    arrdef = {
        name: inpt.value,
        check: createcb,
        delete: `<button id="del">
                    <i class="fa-solid fa-trash"></i>
                    </button>`,
    }

    list.push(arrdef);
    console.log(list);

    listele = document.createElement('li');
    arrout = document.createElement("span");
    arrout.id = "arroutput";
    arrout.className = "arroutput";

    listadder = document.createElement('span');
    listadder.id = "listadder";

    let i = list[list.length - 1];
    listadder.innerHTML = i.name;
    deleteicon.innerHTML = i.delete;

    arrout.appendChild(createcb);
    arrout.appendChild(listadder);
    arrout.appendChild(deleteicon);
    listele.append(arrout);
    todolist.appendChild(listele);

    let remove = document.getElementsByClassName('delete');
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            list.splice(i, 1);
        };
    }
}

function active() {
    optionbutton.innerHTML = '<i class="fa-solid fa-filter"></i>' + "Active";
    activearr = list.filter((list) =>
        list.check.checked == false
    )
    console.log("active list");
    for (let i = 0; i < activearr.length; i++) {
        console.log(activearr[i]);

    }
}
function showall() {
    optionbutton.innerHTML = '<i class="fa-solid fa-filter"></i>' + "All";

    showallarr = list;
    // i = showallarr[showallarr.length -1];
    console.log("Showall array");
    for (let i = 0; i < showallarr.length; i++) {
        console.log(showallarr[i]);
    }
}
function complt() {
    optionbutton.innerHTML = '<i class="fa-solid fa-filter"></i>' + "Completed";


    compltarr = list.filter((list) => list.check.checked == true)
    // i = compltarr[compltarr.length -1];
    console.log("Completed list");
    console.log(i);
    for (let i = 0; i < compltarr.length; i++) {
        console.log(compltarr[i]);
    }
}
