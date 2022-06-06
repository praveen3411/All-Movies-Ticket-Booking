let array=JSON.parse(localStorage.getItem("praveen"))||[];
 document.querySelector("#sumone").innerHTML=`wallet-: ${array}`;
 let more=document.querySelector("#boss");
 let arrayone=JSON.parse(localStorage.getItem("moviedata"))||[];
 let id;

 let hellobro=async()=>{
    let shot=document.getElementById("boom").value;
    let give=anotherfunction(shot);
    let make=await give;
    appedninghere(make);
 }

 let anotherfunction=async(loli)=>{
    try {
        let url=`https://www.omdbapi.com/?s=${loli}&apikey=4178641e`;
        let good=await fetch(url);
        let ok=await good.json();
        return ok.Search;
    } catch (error) {
        console.log(error)
    }
 }

 let appedninghere=(data)=>{
    more.innerHTML=null;
    if(data==undefined){
        return false;
    }
    data.forEach((ele,index) => {
        let cre=document.createElement("div");

        let one=document.createElement("img");
        one.src=ele.Poster;

        let two=document.createElement("h2");
        two.innerText=ele.Title;

        let three=document.createElement("button");
        three.setAttribute("id","sha")
        three.innerText="Book-Now";
        three.addEventListener("click",function(){
            againone(ele);
        })

        cre.append(one,two,three);
        more.append(cre);
    });
 }


let againone=(ele)=>{
    arrayone.push(ele);
    localStorage.setItem("moviedata",JSON.stringify(arrayone));
    window.location.href="checkout.html";
}

let mainbro=(praveen,ganesh)=>{
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        praveen();
    },ganesh)
}