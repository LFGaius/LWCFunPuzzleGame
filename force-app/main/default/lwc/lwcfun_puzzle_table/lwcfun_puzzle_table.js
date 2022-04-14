import { LightningElement } from 'lwc';

export default class Lwcfun_puzzle_table extends LightningElement {
    
    //in puzzleMatrix the number 0 means the empty space on the puzzle table 
    puzzleMatrix=[
        [1,2,3],
        [4,5,6],
        [7,8,0],
    ]

    get puzzleList(){
        return this.puzzleMatrix.reduce((acc,e)=>acc.concat(e),[])
    }

    onSelectPuzzleElement(event){debugger
        const ind=parseInt(event.currentTarget.dataset.id);
        const rowIndexInMatrix=parseInt(ind/3);
        const columnIndexInMatrix=ind-rowIndexInMatrix*3;

        
        console.log('ind:', ind);
        console.log('rowIndexInMatrix:', rowIndexInMatrix);
        console.log('columnIndexInMatrix:', columnIndexInMatrix);
    }
    
}