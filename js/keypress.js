//var messageE = document.getElementById('message');
//messageE.addEventListener('keyup',showKey);


$('#message').keyup(showKey);
document.addEventListener('mousemove',showPosition)
function showKey(){
    console.log(e.key);
    document.getElementById('lastkey').textContent="The Key is" + e.key;
}

function showPosition(e){
    console.log("The postion is"+ e.pageX+","+e.pageY+"");
    //document.getElementById('lastkey').text="The position is" + e.pageX +","+e.pageY+"";

}


const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "gold";
ctx.fillRect(10, 10, 150, 100);
