import Alt from '../alt';

interface MaActionsDef extends AltJS.Action<any> {
    SET_DATA_MG(args: string, defer?: (data: Promise<string>)=> void): string;
}

interface MaActionsDefClass {
    setDataMg(args: string, defer?: (data: Promise<string>) => void): string;
}

class MaActions implements AltJS.ActionsClass, MaActionsDefClass {
    /* 
     * ACTIONS FOR FLUX IMPLEMENT
     */
    //dispatch(...payload: Array<any>) {
    //}

    setDataMg(args: string): string {
        return args;
    }
}


export default Alt.createActions<MaActionsDef>(MaActions);

