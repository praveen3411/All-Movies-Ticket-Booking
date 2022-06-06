let array=JSON.parse(localStorage.getItem("praveen"))||[];
 document.querySelector("#sumone").innerHTML=`wallet-: ${array}`;
 let more=document.querySelector("#boss");
 let arrayone=JSON.parse(localStorage.getItem("moviedata"))||[];
 let boll=document.getElementById("bollogi");

 let newfunctionone=(data)=>{
    data.forEach((ele,index) => {
        let crea=document.createElement("div");

    let first=document.createElement("img");
    first.src=ele.Poster;

    let second=document.createElement("h2");
    second.innerText=ele.Title;

    let third=document.createElement("button");
    third.innerText="Remove";
    third.addEventListener("click",function(){
        moongose(ele,index);
    })

    crea.append(first,second,third);
    boll.append(crea);
    });
 }
 newfunctionone(arrayone);


 let moongose=(ele,index)=>{
    arrayone.splice(index,1);
    localStorage.setItem("moviedata",JSON.stringify(arrayone));
    window.location.reload();
 }

 let connectme=()=>{
    let imp=document.querySelector("#louda").value;
    let danger=imp*100;
    if(array>danger){
        array=array-danger;
        alert("Booking-Successful");
        localStorage.setItem("praveen",JSON.stringify(array))||[];
        window.location.reload();
    }
    else{
        alert("Make minimum balance");
    }
 }