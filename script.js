let btn= document.getElementById("addtodo");
let inputtext= document.getElementById("inputfield");
let display= document.getElementById("todocontainer");
let clearall=document.getElementById("clearlist");



btn.addEventListener('click',function(){
    var para= document.createElement('p');
    var dbtn= document.createElement('button');
    para.innerHTML = inputtext.value;

    if(para.innerHTML == "")
    {
        alert("'Sorry'Empty List Could Not be Added");
    }
    
    else{
            display.appendChild(para);
            para.appendChild(dbtn).innerHTML="×";
            inputtext.value= "";

            dbtn.addEventListener('click',function(){
            display.removeChild(para);
            })
   
        }
})

function remove(){
    document.getElementById("todocontainer").innerHTML="";
}