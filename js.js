// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_elements_index Pour m'aider

function alarmSet(){
    var wakeUpTime;
    var wakeUpTime = document.getElementById('wakeUpTime').elements[0].value;
    store.set("wakeUpTime", wakeUpTime)

    // var element = document.getElementById("validationButton")

    document.getElementById("validationButton").value="Réveil prêt";

    document.getElementById("wakeUpTimeBack").innerHTML = wakeUpTime

    document.getElementById("validationButton").focus()


    // document.getElementById("main").style.backgroundColor = "#1a1a1a"
}

function alarmUnset(){
    document.getElementById("wakeUpTimeBack").innerHTML = null;
    
    document.getElementById("validationButton").value="Valider ?";
}

// document.getElementsByName("reveilTime")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("validationButton").click();
//     }
// });



setInterval(function(){
    var date = new Date();

    var hours = date.getHours();

    var minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else{
        minutes = minutes;
    }

    var wakeUpTime = document.getElementById("wakeUpTimeBack").textContent;
    var currentTime = document.getElementById("clock").textContent;


    console.log(currentTime + wakeUpTime);

    var currentTime = (hours) + ":" + (minutes);

    document.getElementById("clock").textContent = currentTime

    if (wakeUpTime == currentTime) {
        document.getElementById("main").style.backgroundColor = "#ff662e";
    }
},1000);



// Dark Mode toggle

function toggle() {
    const toggle = document.getElementById('toggle');
    toggle.classList.toggle('dark')

    const main = document.getElementById('main');
    main.classList.toggle('dark')

    const hello = document.getElementById('hello');
    hello.classList.toggle('dark')

    const qrev = document.getElementById('qrev');
    qrev.classList.toggle('dark')

    store.set("pageTheme","dark");
}

function toggleMode() {
    if (store.get("pageTheme") == "dark"){
        toggle()
        store.remove("pageTheme");
    }
    else{
        toggle()
    }

    console.log(store.get("pageTheme"))
}


window.onload = function(){
    console.log("-- Store.js update --")
    console.log("Dans le store est stocké: " + store.get("wakeUpTime"))

    // Dark Mode Check
    console.log("Page Theme: " + store.get("pageTheme"))
    if ((store.get("pageTheme")) == "dark"){
        toggle()
    }

    // Delete Form
    axios.delete('https://sheetdb.io/api/v1/82xalt9gnokc4/all')
    .then( response => {
        console.log(response.data);
    });
    console.log("Previous form deleted")
}


