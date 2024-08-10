(function(){
    var hour = document.querySelector(".hours")
    var minute = document.querySelector(".minutes")
    var second = document.querySelector(".seconds")

    var start = document.querySelector(".start")
    var stop = document.querySelector(".stop")
    var reset = document.querySelector(".reset")

    var countdowntimer = null;

    start.addEventListener('click', function(){
        if (hour.value==0 && minute.value==0 && second.value==0) return

        function startInterval(){
            start.style.display="none";
            stop.style.display="initial";

            countdowntimer = setInterval(()=>{
                timer()
            },1000)
        }

      startInterval()
    })

    function stopInterval(state){
        start.innerHTML=state==="pause"? "Continue" :"Start";

         start.style.display = state === "pause" ? "initial" : "none";
        stop.style.display = state === "pause" ? "none" : "initial";
        clearInterval(countdowntimer);
    }

    function timer(){
        if(second.value>60){
            minute.value++;
            second.value=parseInt(second.value)-59;
        }
        if(minute.value>60){
            hour.value++;
            minute.value=parseInt(minute.value)-60;
        }
        if (hour.value==0 && minute.value==0 && second.value==0){
            hour.value="";
            minute.value="";
            second.value="";
            stopInterval()
        }else if(second.value!=0){
            second.value=`${second.value<=10 ? "0" : ""}${second.value-1}`;
        }else if(minute.value!=0 && second.value==0){
            second.value=59;
            minute.value=`${minute.value<=10 ? "0" : ""}${minute.value-1}`;
        }else if(hour.value!=0 && minute.value==0){
            minute.value=60;
            hour.value=`${hour.value<=10 ? "0" : ""}${hour.value-1}`;
        }
    }
    stop.addEventListener("click", function(){
        stopInterval('pause')
    })

    reset.addEventListener("click", function(){
        hour.value="";
        minute.value="";
        second.value="";
        stopInterval();
    })
})();