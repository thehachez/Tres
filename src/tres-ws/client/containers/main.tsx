/// <reference path='../../typings/tsd.d.ts'/>
import * as React from 'react';
import { UserProfiler } from '../components/main/userProfiler';
import { PaOptions } from '../components/main/paOptions';

interface Props {
    children: any;
    dataMg: string;
}

export class Main extends React.Component<Props, any> {
    render() {
        return (
            <div className="cn_main">
                <div className="row_main">
                    <div className="col_ma_left">

                        <div className="row_ma_lf_top">
                        </div>
                        <div className="row_ma_lf_mid">

                            <UserProfiler userStatus="user-status-on"/>

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
                            {/*
                            * COMPONENT
                            * FOR HELP USERS
                            * <Helper />
                            */}

                        </div>

                    </div>
                    <div className="col_ma_right">
                        <div className="row_ma_rg_top">
                        </div>
                        <div className="row_ma_rg_mid">
                        </div>
                        <div className="row_ma_rg_bot">
                        </div>
                    </div>
                </div>
            </div>)
    }
};
