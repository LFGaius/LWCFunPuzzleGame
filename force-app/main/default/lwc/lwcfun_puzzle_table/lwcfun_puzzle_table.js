import { LightningElement } from 'lwc';

//in seconds
const GAMING_TIME=10;
export default class Lwcfun_puzzle_table extends LightningElement {

    hasFailed;
    hasWon;
    setIntervalReference;

    //in puzzleMatrix the number 0 means the empty space on the puzzle table 
    puzzleMatrix=[
        [1,2,3],
        [4,5,6],
        [0,7,8]
    ];

    get resultPopupOpened(){
        return this.hasFailed || this.hasWon;
    }

    get puzzleList(){
        return this.puzzleMatrix.reduce((acc,e)=>acc.concat(e),[])
    }

    secondsCounter=GAMING_TIME;
    
    connectedCallback(){
        this.init();
    }

    init(){
        this.secondsCounter=GAMING_TIME;
        this.setIntervalReference=setInterval(()=>{
            if(this.secondsCounter>0){ 
                this.secondsCounter--;
                if(this.secondsCounter==0){
                    this.hasFailed=true;
                    this.hasWon=false;
                    clearInterval(this.setIntervalReference);
                }
            }
        },1000);
    }

    /**
     * Executed once a puzzle pawn is clicked to move that pawn if it is possible
     * @param {*} event 
     */
    onSelectPuzzlePawn(event){
        const ind=parseInt(event.currentTarget.dataset.id);
        const rowIndexInMatrix=parseInt(ind/3);
        const columnIndexInMatrix=ind-rowIndexInMatrix*3;

        console.log('ind:', ind);
        console.log('rowIndexInMatrix:', rowIndexInMatrix);
        console.log('columnIndexInMatrix:', columnIndexInMatrix);
        this.movePawn(rowIndexInMatrix, columnIndexInMatrix);

    }

    /**
     * We move the pawn to the empty space(0) around it if there is one
     * i:row index
     * j:column index
     */
    movePawn(i, j){
        let puzzleMatrix=[...this.puzzleMatrix];
        if(i-1>=0 && this.puzzleMatrix[i-1][j]==0){
            puzzleMatrix[i-1][j]=this.puzzleMatrix[i][j];
            puzzleMatrix[i][j]=0;
        }else if(i+1<=2 && this.puzzleMatrix[i+1][j]==0){
            puzzleMatrix[i+1][j]=this.puzzleMatrix[i][j];
            puzzleMatrix[i][j]=0;
        }else if(j-1>=0 && this.puzzleMatrix[i][j-1]==0){
            puzzleMatrix[i][j-1]=this.puzzleMatrix[i][j];
            puzzleMatrix[i][j]=0;
        }else if(j+1<=2 && this.puzzleMatrix[i][j+1]==0){
            puzzleMatrix[i][j+1]=this.puzzleMatrix[i][j];
            puzzleMatrix[i][j]=0;
        }

        this.puzzleMatrix=puzzleMatrix;
        this.hasWon=this.checkHasWon();
    }

    
    /**
     * check if the player has won
     */
    checkHasWon(){
        for(let i=0;i<this.puzzleList.length-2;i++){
            if(this.puzzleList[i]>this.puzzleList[i+1]) return false;
        }
        clearInterval(this.setIntervalReference);
        return true;
    }

    onReplay(){
        this.hasFailed=false;
        this.hasWon=false;
        this.puzzleMatrix=[
            [1,2,3],
            [4,5,6],
            [0,7,8]
        ];
        this.init();
    }
    
}