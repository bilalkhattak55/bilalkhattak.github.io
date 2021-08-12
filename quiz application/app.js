function check(){
    var score = 0
    var answer_1 = document.getElementById('q1-a1');
    var answer_2 = document.getElementById('q1-a2');
    var answer_3 = document.getElementById('q1-a3');
    var answer_4 = document.getElementById('q1-a4');
    if(answer_2.checked == true){
        score++
        alert('Q1 answer right')
    }
    else{
        alert('Q1 answer wrong')
    }


    var q_2_answer_1 = document.getElementById('q2-a1');
    var q_2_answer_2 = document.getElementById('q2-a2');
    var q_2_answer_3 = document.getElementById('q2-a3');
    var q_2_answer_4 = document.getElementById('q2-a4');
    if(q_2_answer_1.checked == true){
        score++
        alert('q2 answer right')
    }
    else{
        alert('q2 answer wrong')
    }

    var q_3_answer_1 = document.getElementById('q3-a1');
    var q_3_answer_2 = document.getElementById('q3-a2');
    var q_3_answer_3 = document.getElementById('q3-a3');
    var q_3_answer_4 = document.getElementById('q3-a4');
    if(q_3_answer_3.checked == true){
        score++
        alert('q3 answer right')
    }
    else alert('q3 answer wrong')
    alert('your score is ' + score++)

}