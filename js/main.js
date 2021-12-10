
function janken_rock(){
    let CPU = ["グー","チョキ","パー"];
    let hand = Math.floor(Math.random() *3);
    if(hand === 0){
        let result = "あいこです。もう一回勝負！";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/0.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }else if (hand === 1){
        let result = "おめでとうございます！勝ちです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/1.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }else{
        let result = "残念。負けです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/2.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }
}



function janken_scissors(){
    let CPU = ["グー","チョキ","パー"];
    let hand = Math.floor(Math.random() *3);
    if(hand === 0){
        let result = "残念。負けです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/0.jpg";       
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }else if (hand === 1){
        let result = "あいこです。もう一回勝負！";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/1.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }else{
        let result = "おめでとうございます！勝ちです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/2.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }
}



function janken_paper(){
    let CPU = ["グー","チョキ","パー"];
    let hand = Math.floor(Math.random() *3);
    if(hand === 0){
        let result = "おめでとうございます！勝ちです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/0.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#rock_draw").style.color = "red";
    }else if (hand === 1){
        let result = "残念。負けです。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/1.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#rock_draw").style.color = "red";
    }else{
        let result = "あいこです。もう一回勝負。";
        document.querySelector("#rock_draw").innerHTML = result;
        document.querySelector("#CPU_hand").src = "img/2.jpg";
        document.querySelector("#CPU_hand").style.width = "300px";
        document.querySelector("#CPU_hand").style.height = "180px";
        document.querySelector("#CPU_hand").style.margin = "auto";
        document.querySelector("#rock_draw").style.color = "red";
    }
}



