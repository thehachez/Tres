import Alt from '../alt';
import MaServices from '../services/maServices';

interface IntMaActionsUpper extends AltJS.Action<any> {
    GO_TO_MG_DATA(dataMg: Array<Tres.DataMgArea | Tres.DataMgTask> | string | number): void;
}

interface IntMaActions {
    // states
    _gotoMgDataState_: string | number;
    // actions
    goToMgData(dataMg: string | number, wait?: string): any;
}

class MaActions implements AltJS.ActionsClass, IntMaActions {
    /* 
     * ACTIONS FOR FLUX IMPLEMENT
     */

    // components states
    _gotoMgDataState_: string;

    goToMgData(state: string, wait?: string):  Function | string | number {
        if (this._gotoMgDataState_ === state) return 0;
        if (wait) return "wait";
       
        switch (state) {
            case "mgDataArea":
                // get data areas of API
                this.goToMgData(state, "wait");
                this._gotoMgDataState_ = "mgDataArea";

                return (dispatch) => {
                    MaServices.getData("mgDataArea")
                        .then((response: any) => {
                            dispatch(response.areas);
                        })
                };
            case "mgDataTask":
                // get data tasks of API
                this.goToMgData(state, "wait");
                this._gotoMgDataState_ = "mgDataTask";

                return (dispatch) => {
                    MaServices.getData("mgDataTask")
                        .then((response: any) => {
                            dispatch(response.tasks);
                        })
                };
        }
    }
}

const ACINSTANCE = Alt.createActions(MaActions);
export default <IntMaActionsUpper>ACINSTANCE;
export let Actions = <IntMaActions>ACINSTANCE;
