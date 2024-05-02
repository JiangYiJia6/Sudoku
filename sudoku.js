var numSelected = null;
var tileSelected = null;

var error=null;
var board=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---",
];

var solution=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
];

window.onload = function(){
    setGame();
};

function setGame(){
    //digits 1-9
    for(let i=1;i<=9;i++){
        let number =document.createElement("div");
        number.id=i;
        number.innerText=i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    //board 9x9
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            if(board[r][c]!="-")
            {
                tile.innerText=board[r][c];
            }
            tile.classList.add("tile");
            tile.addEventListener("click",selectTile)
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(num){
    if(numSelected!=null){
        numSelected.classList.remove("number-selected");
    }
    numSelected=this;
    numSelected.classList.add("number-selected");
    document.getElementById(num).classList.add("selected");
}

function selectTile(tile){
    if(numSelected)
    {
        if(this.innerText!=""){
            return;
        }
        this.innerText=numSelected.id;
    }
}