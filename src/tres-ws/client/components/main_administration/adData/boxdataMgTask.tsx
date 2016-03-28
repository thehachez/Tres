﻿import * as React from 'react';
import { ItemTaskHot,
    ItemTaskFast,
    ItemTaskStandar,
    ItemHash } from '../../svg/items';

interface Props extends Tres.DataMgTask {
    key: number;
}

export default class BoxsdataMg extends React.Component<Props, any> {
    render() {
        var typeTask: string;
        function TYPEASSIGNMENT(self: BoxsdataMg, type: string) {
            switch (type) {
                case "hottask":
                    typeTask = "hot";
                    return <ItemTaskHot />
                case "fasttask":
                    typeTask = "rapido";
                    return <ItemTaskFast />
                default:
                    typeTask = "normal";
                    return <ItemTaskStandar />
            }
        }

        return (
            <ul className="ul_boxsdatamg">
                <li className="boxdatamg_li_top">
                    <p>{ this.props.name }</p>
                </li>
                <li className ="boxdatamg_li_mid">
                </li>
                <li className="boxdatamg_li_bot">
                    <div className="boxdat_libot_div_left">
                        <div className="cn_boxdata">
                            <div className="boxdata_hash">
                                <ItemHash />
                            </div>
                            <p>{ this.props.hash }</p>
                        </div>
                        <div className="cn_boxdata">
                            <div className="boxdata_type">
                                { 
                                    TYPEASSIGNMENT(this, this.props.type) 
                                } 
                            </div>
                            <p>
                                { 
                                  typeTask 
                                }
                            </p>
                        </div>
                    </div>
                    <div className="boxdat_libot_div_right">
                        <div className="boxdat_left">
                        </div>
                        <div className="boxdat_timeatention">
                            <p>{ this.props.timeta }</p>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
};
