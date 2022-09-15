function getresult(){
    var username = document.getElementById("username").value;
    var maths = document.getElementById("maths").value;
    var english = document.getElementById("english").value;
    var sci = document.getElementById("sci").value;
    var urdu = document.getElementById("urdu").value;
    var sst = document.getElementById("sst").value;


    maths=parseInt(maths)
    english=parseInt(english)
    sci=parseInt(sci)
    urdu=parseInt(urdu)
    sst=parseInt(sst)

var total= maths+sci+english+urdu+sst

var per = total/500*100

var grade;
if(per>=80){
    grade="a*"
}
else if (per >=70){
    grade="b"
}

else if (per >=60){
    grade="c"
}

var mydiv = document.createElement("div")

mydiv.id="mybox"


var grades = document.createElement("h2")
var h1 = document.createElement("h2")
var mark1 = document.createElement("h2")
var mark2 = document.createElement("h2")
var mark3 = document.createElement("h2")
var mark4 = document.createElement("h2")
var mark5 = document.createElement("h2")
var percentage = document.createElement("h2")
var totalmarks = document.createElement("h2")


document.getElementById("container").appendChild(mydiv)
document.getElementById("mybox").appendChild(h1)
document.getElementById("mybox").appendChild(mark1)
document.getElementById("mybox").appendChild(mark2)
document.getElementById("mybox").appendChild(mark3)
document.getElementById("mybox").appendChild(mark4)
document.getElementById("mybox").appendChild(mark5)
document.getElementById("mybox").appendChild(percentage)
document.getElementById("mybox").appendChild(totalmarks)
document.getElementById("mybox").appendChild(grades)



grades.innerHTML=grade
h1.innerHTML=username
mark1.innerHTML=maths
mark2.innerHTML=english
mark3.innerHTML=sci
mark4.innerHTML=urdu
mark5.innerHTML=sst
percentage.innerHTML=per
totalmarks.innerHTML=total
}