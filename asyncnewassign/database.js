let studentDetails = JSON.parse(localStorage.getItem("studentData"));

let count1;
let count2;

studentDetails.map(function(elem,index){

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = elem.name;

    let td2 = document.createElement("td");
    td2.textContent = elem.course;

    let td3 = document.createElement("td");
    td3.textContent = elem.unit;

    let td4 = document.createElement("img");
    td4.src = elem.image;

    let td5 = document.createElement("td");
    td5.textContent = elem.batch;
    if(td5.textContent==1)
    {
 
       document.querySelector("#batch1").innerText++;
       
    }
    else if(td5.textContent==2)
    {
        document.querySelector("#batch2").innerText++;
    }

    let td6 = document.createElement("td");
    td6.textContent = "Remove";
    td6.style.color="Red";
    td6.style.fontWeight="bold";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
         Removefun(elem,index);
    })
    
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);
})
let Removeditem = JSON.parse(localStorage.getItem("trash")) || []; 
function Removefun(elem,index){
//    console.log("remove");
  Removeditem.push(studentDetails.splice(index,1));
  localStorage.setItem("trash",JSON.stringify(Removeditem));
  localStorage.setItem("studentData",JSON.stringify(studentDetails));
  window.location.reload();
}