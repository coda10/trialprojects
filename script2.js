const PI = 5.144;
console.log(PI)




var num = [1, 2, 3, 4];

for (i = 0; i < num.length; i++) {
    const ans = num[i]
    console.log(ans)
}


//var date = new Date();
//document.querySelector("body").innerHTML = date;
setInterval(function() {
            var date = new Date();
            //document.querySelector("body").innerHTML = date;
            document.querySelector("body").innerHTML = "The Time is: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</br></br><i> {HTML, CSS & JAVASCRIPT} </i></br>Created By: DAKE DANIEL";
        },
        1000)
    //setTimeout("location.reload(true);", 1000);