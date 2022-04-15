import { LightningElement,api } from 'lwc';

export default class Lwcfun_game_result_popup extends LightningElement {
    @api hasWon;
    @api hasFailed;
}