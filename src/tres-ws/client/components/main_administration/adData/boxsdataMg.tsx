import * as React from 'react';
import { ItemClock,
         ItemHash } from '../../svg/items';

interface Props {
    key: number;
    name: string;
    description: string;
    idorg: string;
    idbranch: string;
    idarea: string;
    idtask: string;
    timeta: string;
    dateta: string;
}

export default class BoxsdataMg extends React.Component<Props, any> {
    render() {
        return (
            <ul className="ul_boxsdatamg">
                <li className="boxdatamg_li_top">
                    <p>{ this.props.name }</p>
                </li>
                <li className ="boxdatamg_li_mid">
                    <div className="boxdata_type">
                        <ItemHash />
                    </div>
                    <p>{ this.props.description }</p>
                </li>
                <li className="boxdatamg_li_bot">
                    <div className="boxdat_libot_div_left">
                    </div>
                    <div className="boxdat_libot_div_right">
                        <div className="boxdat_left"></div>
                        <div className="boxdat_timeatention">
                            <p>2:00</p>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
};
