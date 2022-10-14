const clickable =document.querySelectorAll(".board *");
const Wmoves=[[["a","c1"],["a","c2"],["a","c3"]],
            [["b","c1"],["b","c2"],["b","c3"]],
            [["c","c1"],["c","c2"],["c","c3"]],
            [["a","c1"],["b","c1"],["c","c1"]],
            [["a","c2"],["b","c2"],["c","c2"]],
            [["a","c3"],["b","c3"],["c","c3"]],
            [["a","c1"],["b","c2"],["c","c3"]]];
function player(name){
    this.name=name;
    this.score=0;
    this.moves=[];
}
function checkWinner(){
    Array.from(clickable).forEach((item)=>{
        if(item.hasChildNodes('.play')){
            console.log(item.className);
        }
    });
}
const abdo=new player("abdo");
Array.from(clickable).forEach(function(item){
    item.addEventListener("click",function(e){
        if (e.target.hasChildNodes()){
            console.log("try again");
        }else{
            const preClasslist=Array.from(e.target.classList);
            abdo.moves.push(preClasslist.map((item)=>item));
            preClasslist.unshift("");
            const classlist=preClasslist.join(".");
            const clicked=document.querySelector(`${classlist}`);
            const play=document.createElement("div");
            play.className="play";
            play.textContent="X";
            clicked.appendChild(play);
            // console.log(abdo.moves);
        }
        checkWinner();
})
});