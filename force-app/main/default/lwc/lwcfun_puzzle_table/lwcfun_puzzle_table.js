import { LightningElement } from 'lwc';

export default class Lwcfun_puzzle_table extends LightningElement {

    hasFailed;

    //in puzzleMatrix the number 0 means the empty space on the puzzle table 
    puzzleMatrix=[
        [1,2,3],
        [4,5,6],
        [7,0,8]
    ]

    get hasWon(){
        for(let i=0;i<this.puzzleList.length-2;i++){
            if(this.puzzleList[i]>this.puzzleList[i+1]) return false;
        }
        return true;
    }

    get puzzleList(){
        return this.puzzleMatrix.reduce((acc,e)=>acc.concat(e),[])
    }

    onSelectPuzzlePawn(event){debugger
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
    }
    
}