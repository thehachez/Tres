import * as React from 'react';
// PROPS INTEFACES
import { PropsBoxesDataMg } from '../../stores/maProps';

// COMPONENTS
import PanelDataMg from './adData/panelDataMg';
import SearchMg from './adData/searchMg';
import BoxsdataMg from './adData/boxsdataMg';

interface Props {
    dataMg: Array<PropsBoxesDataMg>;
}

export class AdData extends React.Component<Props, any> {
    render() {
        return (
            <section className="con_adData" id="adData">
                <div className="row_adData_top">
                    <div className="col_adData_tp_left_min"></div>
                    <div className="col_adData_tp_left"></div>
                    <div className="col_adData_tp_mid">
                        {/*
                          * SEARCH IN DATA MANAGEMENT
                          */}
                        <SearchMg />

                    </div>
                    <div className="col_adData_tp_right"></div>
                </div>
                <div className="row_adData_mid">
                    <div className="col_adData_md_left"></div>
                    <div className="col_adData_md_mid">
                        <div className="cn_adData_mag">
                            {/*
                              * BOXES OF DATA
                              */}
                            {
                                this.props.dataMg ?
                                    this.props.dataMg.map((element: PropsBoxesDataMg, key: number ) => {
                                        return (<BoxsdataMg
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
                                    }) : "wait"
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
