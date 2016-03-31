import * as React from 'react';

// COMPONENTS
import { UserProfiler } from '../components/main/userProfiler';
import { PaOptions } from '../components/main/paOptions';
import PanelDataMg from '../components/main_administration/adData/panelDataMg';


interface Props {
    children: any;
    dataMg: Array<Tres.DataMgTask>;
}

export class Main extends React.Component<Props, any> {
    render() {
        return (
            <div className="cn_main">

                <div className="row_footer_fixed">
                   <div className="col_fotfixed_left"></div>
                   <div className="col_fotfixed_mid">
                      <div className="col_chid_ffix_left"></div>
                      <div className="col_chid_ffix_mid">
                            
                        <PanelDataMg />

                            </div>
                      <div className="col_chid_ffix_right"></div>
                  </div>
                   <div className="col_fotfixed_right"></div>
                </div>

                <div className="row_main">
                    <div className="col_ma_left">

                        <div className="row_ma_lf_top">
                        </div>
                        <div className="row_ma_lf_mid">

                            <PaOptions />

                        </div>
                        <div className="row_ma_lf_bot">
                        </div>

                    </div>
                    <div className="col_ma_mid">

                        <div className="row_ma_mid_top">
                        </div>
                        <div className="row_ma_mid_mid">
                            {
                                React.cloneElement(this.props.children,
                                    {
                                        dataMg: this.props.dataMg
                                    })
                            }
                        </div>

                        <div className="row_ma_mid_bot">
                        </div>

                    </div>
                    <div className="col_ma_right">
                        <div className="row_ma_rg_top">
                        </div>
                        <div className="row_ma_rg_mid">
                            <div className="row_ma_rg_mid_childtop" />
                            <div className="row_ma_rg_mid_childmid">
                                {/*
                                  <UserProfiler userStatus="user-status-on"/>
                                */}
                            </div>
                            <div className="row_ma_rg_mid_childbot" />
                        </div>
                        <div className="row_ma_rg_bot">
                        </div>
                    </div>
                </div>
            </div>)
    }
};
