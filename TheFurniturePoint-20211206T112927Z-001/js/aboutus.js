var request = new XMLHttpRequest();
request.onload = function() {
    var data = JSON.parse(request.responseText);
    document.getElementById("n1").innerHTML = data[0].name;
    document.getElementById("n2").innerHTML = data[1].name;
    document.getElementById("n3").innerHTML = data[2].name;
    document.getElementById("r1").innerHTML = data[0].roll;
    document.getElementById("r2").innerHTML = data[1].roll;
    document.getElementById("r3").innerHTML = data[2].roll;
   

};
request.open('GET' , 'js/aboutus.json' , true);
request.send();

