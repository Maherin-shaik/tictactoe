let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("p");
            
let turnO=true; 
let count=0; //to track draw
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=() =>{
    turnO=true;
    enablebtns();
    msgcontainer.classList.add('hide');

}
const gamedraw=()=>{
    msg.innerText="The Game was DRAW";
            msgcontainer.classList.remove('hide');
            disablebtns();
}

boxes.forEach(
    (box)=>{
    box.addEventListener('click',()=>{
        if(turnO){ //player O
             box.innerText='O';
            turnO=false;
            box.style.color='#63fcff';
        }
        else{ //player X
            box.innerText='X';
            turnO=true;
            box.style.color='rgb(224, 238, 104)';
        }
        box.disabled='true';
        let draw=checkWinner();
        count++;
        if (count==9 && !draw){
            gamedraw();
        }
    });
    
});

const disablebtns=() =>{
    for(let box of boxes){
         box.disabled=true;
    }
}
const enablebtns=() =>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}
const showWinner=(winner) =>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disablebtns();
}

const checkWinner=()=>{
    for ( let pattern of winPatterns){
            let posval1=boxes[pattern[0]].innerText;
            let posval2=boxes[pattern[1]].innerText;
            let posval3=boxes[pattern[2]].innerText;
            if(posval1!="" && posval2!="" && posval3!=""){
                if(posval1===posval2 && posval2===posval3){
                    showWinner(posval1);
                    return true;
                    }
                }
    }
};
newgamebtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);
