import Alt from '../alt';
import * as Tres from '../core/tresCore';

interface IntMaActionsUpper extends AltJS.Action<any> {
    GO_TO_MAIN_BOXES(args: string, defer?: (data: Promise<string>)=> void): string;
}

interface IntMaActions {
    goToMainBoxes(args: string, defer?: (data: Promise<string>) => void): string;
}

class MaActions implements AltJS.ActionsClass, IntMaActions {
    /* 
     * ACTIONS FOR FLUX IMPLEMENT
     */
    //dispatch(...payload: Array<any>) {
    //}


    // PURE ACTIONS
    goToMainBoxes(args: string): string {
        return args;
    }
}

const ACINSTANCE = Alt.createActions(MaActions);
export default <IntMaActionsUpper>ACINSTANCE;
export let Actions = <IntMaActions>ACINSTANCE;
