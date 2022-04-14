import { LightningElement } from 'lwc';

export default class Lwcfun_puzzle_game extends LightningElement {
    playingScreenDisplayed;


    onStart(){
        this.playingScreenDisplayed=true;
    }
}