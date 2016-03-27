import { MaProps } from './maProps';
import { HanderlsDef } from './store';

export class MaHandlers extends MaProps implements HanderlsDef {
    // Set handlers listeners of actions
    handlerGoToMgData(mgData: Array<Tres.DataMgTask
        | Tres.DataMgArea> | number | string): void {

        if (!mgData) {
            // prevent unnecessary actions / renders
            return;
        }
        else if (mgData === "wait") {
            // send wait spinner action
            this.dataMg = 0;

        } else {
            // send normal data to render
            this.dataMg = mgData;
        }
    }
}