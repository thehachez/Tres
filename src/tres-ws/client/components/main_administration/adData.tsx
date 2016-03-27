import * as React from 'react';
import { Actions } from '../../actions/maActions';

// PROPS INTERFACES
import { PropsBoxesDataMgTask } from '../../stores/maProps';
import { PropsBoxesDataMgArea } from '../../stores/maProps';

// COMPONENTS
import PanelDataMg from './adData/panelDataMg';
import SearchMg from './adData/searchMg';
import TopMiddlePanelMg from './adData/topmiddlepanelmg';
import Spinner from '../default/spinner';

// BOXES OF DATA 
import BoxsdataMgTask from './adData/boxdataMgTask';
import BoxsdataMgArea from './adData/boxdataMgArea';

interface Props {
    dataMg: Array<PropsBoxesDataMgArea | PropsBoxesDataMgTask>;
}

export class AdData extends React.Component<Props, any> {

    componentWillMount() {
        Actions.goToMgData("mgDataArea");
    }

    render() {
        function INJECTBOXES(self: AdData) {
            console.log(self.props.dataMg)
            if (Actions._gotoMgDataState_ === "mgDataArea") {
                return self.props.dataMg.map((element: PropsBoxesDataMgArea, key: number) => {
                    return (<BoxsdataMgArea
                        idorg={ element.idorg }
                        idbranch={ element.idbranch }
                        idarea={ element.idarea }
                        name={ element.name }
                        hash= { element.hash }

                        key={ key }
                        />)
                });
            }
            else if (Actions._gotoMgDataState_ === "mgDataTask") {
                return self.props.dataMg.map((element: PropsBoxesDataMgTask, key: number) => {
                    return (<BoxsdataMgTask
                        idorg={ element.idorg }
                        idbranch={ element.idbranch }
                        idarea={ element.idarea }
                        idtask={ element.idtask }
                        name={ element.name }
                        hash= { element.hash }
                        timeta={ element.timeta }
                        datata={ element.datata }

                        key={ key }
                        />)
                });
            }

        }
        return (
            <section className="con_adData" id="adData">
                <div className="row_adData_top">
                    <div className="col_adData_tp_left_min"></div>
                    <div className="col_adData_tp_left">
                        <TopMiddlePanelMg />
                    </div>
                    <div className="col_adData_tp_mid">
                        {/*
                          * SEARCH IN DATA MANAGEMENT
                          */}
                        <SearchMg />

                    </div>
                    <div className="col_adData_tp_right"></div>
                </div>
                <div className="row_adData_mid">
                    <div className="col_adData_md_left">

                    </div>
                    <div className="col_adData_md_mid">
                        <div className="cn_adData_mag">
                            {
                                this.props.dataMg ? INJECTBOXES(this) : <Spinner />
                            }
                        </div>
                    </div>
                    <div className="col_adData_md_right">
                        {/*
                          * ITEM GROUP FOR MANAGEMENT THE DATA
                          */}
                        <PanelDataMg />

                    </div>
                </div>
            </section>
        )
    }
};
