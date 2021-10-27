ulList = document.querySelector(".item-two .about-list");
itemButton = document.getElementById("click");

itemButton.addEventListener("click",function(){
    ulList.classList.toggle("active");
})

var n1 = 0;
var hoverSpan1 = document.getElementById("hover1");
document.getElementById("image1").onmouseover = function(){
    n1 = n1 + 1;
    hoverSpan1.innerHTML = n1;
}

var n2 = 0;
var hoverSpan2 = document.getElementById("hover2");
document.getElementById("image2").onmouseover = function(){
    n2 = n2 + 1;
    hoverSpan2.innerHTML = n2;
}

var n3 = 0;
var hoverSpan3 = document.getElementById("hover3");
document.getElementById("image3").onmouseover = function(){
    n3 = n3 + 1;
    hoverSpan3.innerHTML = n3;
}

var input = document.getElementsByClassName("inp");

for(var i = 0; i < input.length; i++){
    
    input[i].onfocus = function(){
        this.classList.add("place");
    }
    input[i].onblur = function(){
        this.classList.remove("place");
    }
}


var icon = document.getElementsByClassName("icon");
for(var i = 0; i < icon.length; i++){
    icon[i].onclick = function(){
        this.parentElement.classList.toggle("change")
    };
}

 function validName(){
    var nameCheck = prompt("what is your name" , "your name");
    if(nameCheck == "mohammed"){
        window.location = "index.html";
    }else{
        alert("Your Name is not valid")
    }
}

