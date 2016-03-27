import { MaProps } from './maProps';
import { HanderlsDef } from './store';
import { PropsBoxesDataMgTask, PropsBoxesDataMgArea } from '../stores/maProps';

export class MaHandlers extends MaProps implements HanderlsDef {
    // Set handlers listeners of actions
    handlerGoToMgData(mgData: Array<PropsBoxesDataMgTask | PropsBoxesDataMgArea> | number | string): void {

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