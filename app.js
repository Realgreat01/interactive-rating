let rating =  document.getElementById("number1").innerHTML;
let elements =document.getElementsByClassName( "number");
let ratingEnd = document.getElementById("rating-end");
let back = document.getElementsByClassName("back");
let ratingStart = document.getElementById("start");
let ratedValue = document.getElementById("rating");

    const results =()=>{
        ratingEnd.style.transform="translateX(0)";
        ratingEnd.style.color="green";
        ratingEnd.style.zIndex="3";
        ratingEnd.style.visibility="visible"
}

const backNow=()=>{
    if(ratingEnd.style.visibility="visible"){
    ratingEnd.style.visibility="hidden"}
    else{
        ratingEnd.style.visibility="visible" 
    }
};

const clicked=(e)=>{
    ratedValue.textContent=e.target.innerHTML
}

for (i = 0;i<elements.length; i++){
elements[i].addEventListener("click", clicked)
}