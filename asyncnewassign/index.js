function Data(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
 }
// let count1=0;
// let count2=0;
let arr = JSON.parse(localStorage.getItem("studentData")) || [];

function storeData(e){
    e.preventDefault();

    let name = document.querySelector("#name").value;

    let course =document.querySelector("#course").value;

    let unit =document.querySelector("#unit").value;

    let image =document.querySelector("#imgUrl").value;

    let batch =document.querySelector("#batch").value;

    let d1 = new Data(name,course,unit,image,batch);

    arr.push(d1);
    

    localStorage.setItem("studentData",JSON.stringify(arr));
    alert("Student data added");

    document.querySelector("#name").value=null;
    document.querySelector("#course").value=null;
    document.querySelector("#unit").value=null;
    document.querySelector("#imgUrl").value=null;
    document.querySelector("#batch").value=null;

    
    let studentdetails = JSON.parse(localStorage.getItem("studentData"));

    studentdetails.map(function(elem){

       if(elem.batch==1)
       {
          document.querySelector("#batch1").innerText++; 
       }
       else if(elem.batch==2)
       {
           document.querySelector("#batch2").innerText++;
       }
    })
    
}





