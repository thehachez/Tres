import * as React from 'react';
import { ItemHash } from '../../svg/items';

interface Props extends Tres.DataMgArea {
    key: number;
}

export default class BoxsdataMgArea extends React.Component<Props, any> {
    render() {
        return (
            <ul className="ul_boxsdatamg">
                <li className="boxdatamg_li_top">
                    <p>{ this.props.name }</p>
                </li>
                <li className ="boxdatamg_li_mid">
                </li>
                <li className="boxdatamg_li_bot">
                    <div className="boxdat_libot_div_left">
                        <div className="boxdata_type">
                            <ItemHash />
                        </div>
                        <p>{ this.props.hash }</p>
                    </div>
                    <div className="boxdat_libot_div_right">
                        <div className="boxdat_left"></div>
                        <div className="boxdat_timeatention">
                            <p></p>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
};
