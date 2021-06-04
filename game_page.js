player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0 ;
player2_score = 0 ;
player_question ="player1";
player_answer ="player2";
document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn -" +player1_name; 
document.getElementById("player_answer").innerHTML="Answer turn -" +player2_name; 
function send(){
    get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log(word);
charAt1=word.charAt(1);
console.log(charAt1);
length_divide_two=word.length/2;
console.log(length_divide_two);
charAt2=word.charAt(length_divide_two);
length_minus_one=word.length-1;
console.log(length_minus_one);
charAt3=word.charAt(length_minus_one);
remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
question_word="<h4 id='word_display'>Q:"+ remove_charAt3 +"</h4>";
input_box="<br><input type='text' id='input_check_box'";
check_btn="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question_word + input_box + check_btn;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer= get_answer.toLowerCase();
    console.log(answer);
    if(answer==word){
        if(player_answer=="player1"){
            player1_score=player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(player_question =="player1"){
        player_question="player2";
        document.getElementById("player_question").innerHTML="Question turn -" + player2_name;
    }
    else{
        player_question="player1";
        document.getElementById("player_question").innerHTML="Question turn -" + player1_name;
    }
    if(player_answer =="player1"){
        player_answer="player2";
        document.getElementById("player_answer").innerHTML="Answer turn -" + player2_name;
    }
    else{
        player_answer="player1";
        document.getElementById("player_answer").innerHTML="Answer turn -" + player1_name;
    }
    document.getElementById("output").innerHTML="";
}