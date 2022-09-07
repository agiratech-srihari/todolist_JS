var inpt=document.getElementById("inpt");
var list=[];
var createcb='';
var arrdef ={};
var deleteicon="";
var listadder="";
var listele="";
var todolist = document.getElementById("todolist");
var activearr="";
function add(){
    createcb=document.createElement("input");
    createcb.type="checkbox";
    createcb.id="checbo";
    createcb.className="checbo";
    
    deleteicon=document.createElement("i");
    deleteicon.className="delete";
    
    arrdef={
        name: inpt.value,
        check: createcb,
        delete: `<button id="del">
                    <i class="fa-solid fa-trash"></i>
                    </button>`,
       }
    
    list.push(arrdef); 
   
    listele = document.createElement('li');
    arrout = document.createElement("span");
    arrout.id="arroutput";
    listadder.id="listadder";
    arrout.className="arroutput";

    listadder = document.createElement('span');

    let i = list[list.length -1];
    listadder.innerHTML=i.name;
    deleteicon.innerHTML=i.delete;
    
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
            list.splice(i,1);
        }
    }
}

function active(){
    activearr = list.filter((list) => 
        list.check.checked == false
    )
    console.log(activearr);
}

