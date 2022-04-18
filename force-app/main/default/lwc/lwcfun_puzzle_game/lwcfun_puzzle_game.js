import { LightningElement } from 'lwc';
import LWCFUN_RESOURCES from "@salesforce/resourceUrl/lwcfun_logo";

export default class Lwcfun_puzzle_game extends LightningElement {
    playingScreenDisplayed;

    get logoUrl() {
        return LWCFUN_RESOURCES;
    }

    onStart(){
        this.playingScreenDisplayed=true;
    }
}