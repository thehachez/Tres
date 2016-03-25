import * as React from 'react';
// COMPONENTS
import PanelDataMg from './adData/panelDataMg';
import SearchMg from './adData/searchMg';
import BoxsdataMg from './adData/boxsdataMg';

export class AdData extends React.Component<any, any> {
    render() {
        return (
            <section className="con_adData" id="adData">
                <div className="row_adData_top">
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
                    <div className="col_adData_md_left">
                        <div className="cn_adData_mag">
                            {/*
                              * BOXES OF DATA
                              */}
                            {
                                this.props.dataMg ?
                                    this.props.dataMg.map((element, key) => {
                                        return (<BoxsdataMg
                                            idorg={ element.idorg }
                                            idbranch={ element.idbranch }
                                            idarea={ element.idarea }
                                            idtask={ element.idtask }
                                            name={ element.name }
                                            description= { element.description }
                                            timeta={ element.timeta }
                                            dateta={ element.datata }

                                            key={ key }
                                            />)
                                    }) : "wait"
                            }
                        </div>
                    </div>
                    <div className="col_adData_md_mid">
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
