var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault()
    var score = 0
    var display = ""
    var q1Answer = document.querySelector('input[name="q1"]:checked')
    if (q1Answer && q1Answer.value === "a"){
        score++
        display = display + "Question 1 : correct (a)<br>"
    }else{
        display = display + "Question 1 : wrong (correct was a)<br>"
    }
    var q2Answer = document.querySelector('input[name="q2"]:checked')
    if (q2Answer && q2Answer.value === 'b'){
        score++
        display = display + "Question 2 : correct (b)<br>"
    }else{
        display = display + "Question 2 : wrong (correct was b)<br>"
    }
    var q3Answer = document.querySelector('input[name="q3"]:checked')
    if (q3Answer && q3Answer.value === 'c'){
        score++
        display = display + "Question 3 : correct (c)<br>"
    }else{
        display = display + "Question 3 : wrong (correct was c)<br>"
    }
    var q4Answer = document.querySelector('input[name="q4"]:checked')
    if (q4Answer && q4Answer.value === 'd'){
        score++
        display = display + "Question 4 : correct (d)<br>"
    }else{
        display = display + "Question 4 : wrong (correct was d)<br>"
    }
    var q5Answer = document.querySelector('input[name="q5"]:checked')
    if (q5Answer && q5Answer.value === 'a'){
        score++
        display = display + "Question 5 : correct (a)<br>"
    }else{
        display = display + "Question 5 : wrong (correct was a)<br>"
    }
    var disp = document.getElementById('results')
    disp,this.innerHTML = "<h2> Your Score: "+ score +" out of 5</h2>"+"<h3> Answer details:<h3>"+ display

});