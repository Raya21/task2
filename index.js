var hours=0;
var minutes=0;
var seconds=0;
var timerStart;
var recordNumber=1;




/******************************Dark/Light Theme*********************************/

document.getElementById("icon").addEventListener("click", function() {
  var icon=document.getElementById("icon");

  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme"))
  {
     icon.src="images/moon.png"
  }

  else
  icon.src="images/sun.png"

 
});



/******************************Play Button**************************************/

document.getElementById("play-button").addEventListener("click", function() {
    document.getElementById("play-button-container").style.display = "none";
    document.getElementById("three-buttons-container").style.display = "flex";
    document.getElementById("time-container").style.backgroundImage="linear-gradient(to bottom right,red,yellow)";
    
    /*************Start The Timer***************/

       timerStart=setInterval(function(){
        if(seconds<59)
           seconds++;
        else if(seconds==59) 
        {
          seconds=0;
          minutes++;
          if(minutes==59)
          {
            minutes=0;
            hours++;
          }
        }

     
        document.getElementById("seconds").innerHTML=seconds;
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("hours").innerHTML=hours;

      },1000);  
  
  });

  /*****************************Reset Button***********************************/

  document.getElementById("reset-button").addEventListener("click", function() {

    hours=0;
    minutes=0;
    seconds=0;

    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("hours").innerHTML=hours;
    stopTimer();
    
  });

  /*****************************Pause Button***********************************/

  document.getElementById("pause-button").addEventListener("click", function() {

    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("hours").innerHTML=hours;
    stopTimer();
    


  });

    /******************************Trash Basket Icon******************************/

    function deleteSpacificTimeRecord(parent_id_of_clicked_element)
     {
    document.getElementById(`${parent_id_of_clicked_element}`).remove();
 
     }


  /********************************Lap Button***********************************/

  document.getElementById("lap-button").addEventListener("click", function() {

    document.getElementById("clearAll-button-container").style.display="block";

    const new_div_element = document.createElement("div");
    new_div_element.id=`${recordNumber}`;
    const element = document.getElementById("time-records");
    element.appendChild(new_div_element);

    const trash_basket_icon=document.createElement("i");
    trash_basket_icon.className=("fas fa-trash-alt");
    trash_basket_icon.id="trash_basket_icon";
    new_div_element.appendChild(trash_basket_icon);
    trash_basket_icon.setAttribute("onclick","deleteSpacificTimeRecord(this.parentElement.id)");
  
    const new_p_element = document.createElement("p");
    const node = document.createTextNode(`#${recordNumber}`+'\xa0\xa0\xa0\xa0\xa0\xa0' +` ${hours} : ${minutes} : ${seconds}`);
    new_p_element.appendChild(node);
    new_div_element.appendChild(new_p_element);

    recordNumber++;
  });

 
  /*******************************Clear All Button******************************/

  document.getElementById("clearAll-button").addEventListener("click", function() {

    var time_records = document.getElementById("time-records");
    var div_record_child = time_records.lastElementChild;

    while (div_record_child) {
      time_records.removeChild(div_record_child);
      div_record_child = time_records.lastElementChild;
  }

  recordNumber=1;

  });


  /*****************************Function To Stop The Timer**********************/

  function stopTimer()
  {
    clearInterval(timerStart);
  }



  