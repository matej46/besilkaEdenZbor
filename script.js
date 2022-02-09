var vnesiBtn=document.getElementById("VnesiBtn")
    var odnovoBtn=document.getElementById("odnovoBtn")
    odnovoBtn.style.visibility="hidden"
    var word="hamburger"
    var attempts=5
    var counter=0
    for (i=0; i<=word.length; i++) {
    document.getElementsByClassName("bukva")[i].style.visibility="hidden";
}

    function check() {
    var attemptsP=document.getElementById("attempts")

    var result=document.getElementById("result")

    var text=document.getElementById("text")
    var letter=document.getElementById("text").value
    if (letter.length>1) {
    alert("Vnesi tocno edna bukva")
    text.value=""
}
    else {
    var wordArr=word.split("")


    if (wordArr.includes(letter)) {
    counter++
    if (counter==8) {
    alert("pogoden zbor")
    vnesiBtn.style.visibility="hidden"
    odnovoBtn.style.visibility="visible"
}
    console.log(counter)
    result.innerHTML="Pogodivte bukva"
    text.value=""
    for (i=0; i<=word.length; i++) {
    document.getElementsByClassName(letter)[i].style.visibility = "visible"
}


}
    else {
    result.innerHTML="Ne pogodivte bukva"
    attempts--
    attemptsP.innerHTML="Attempts remaining:" +attempts
    text.value=""
    if(attempts==0) {
    alert("Izgubivte")
    vnesiBtn.style.visibility="hidden"
    odnovoBtn.style.visibility="visible"
}
}
}

}
    function odnovo() {
    document.location.reload()
}
