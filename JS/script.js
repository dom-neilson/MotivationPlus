



// function renderTime(){
    var mydate = new Date();
    var year =mydate.getYear();
        if(year < 1000){
            year +=1900;
        }
        

        var day = mydate.getDay();
        var month =mydate.getMonth();
        var dayM = mydate.getDate();
        var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var montharray = new Array("/ 01/","/ 02 /","/ 03 /","/ 04 /","/ 05 /","/ 06 /","/ 07 /","/ 08 /","/ 09 /","/ 10 /","/ 11 /","/ 12 /");
        // Date End
        var myClock = document.getElementById("dateDisplay");
        myClock.textContent = "" +dayarray[day]+ "|" +dayM+ " " +montharray[month]+ "  " +year; 
        myClock.innerText = "" +dayarray[day]+ " | " +dayM+ " " +montharray[month]+ "  " +year;
        

//Time
function renderTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('timeDisplay').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){renderTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//Time End







const divWithQuote = document.getElementById("quoteText");




const url = "https://type.fit/api/quotes/";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let Button = document.querySelector("button");
        Button.addEventListener("click", function(){
        let RandomQuotes = Math.floor(Math.random() * data.length);
        let Quotes = (data[RandomQuotes].text);
        let Author = (data[RandomQuotes].author);
        document.getElementById("quotes").innerHTML = Quotes;
        document.getElementById("author").innerHTML = "- " +Author;
    })

});