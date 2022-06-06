let array=JSON.parse(localStorage.getItem("praveen"))||[];
document.querySelector("#sumone").innerHTML=`Wallet -:${array}`
let myfunction=()=>{
    event.preventDefault();
    let take=document.getElementById("one").value;
    let sum=0;
    sum=sum+Number(take)+Number(array)
    localStorage.setItem("praveen",JSON.stringify(sum))
    window.location.reload();
}
document.querySelector("form").addEventListener("submit",myfunction);