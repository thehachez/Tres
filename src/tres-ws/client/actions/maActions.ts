import Alt from '../alt';

interface AdActionsDef {
    SET_DATA_MG(data: string, defer?: Promise<string>): string;
}

class MaActions implements AltJS.ActionsClass {
    /* 
     * ACTIONS FOR FLUX IMPLEMENT
     */

    //dispatch(...payload: Array<any>) {
    //}

    setDataMg<T>(data: T): T {
        return data;
    }
}


export default Alt.createActions<AdActionsDef>(MaActions);

