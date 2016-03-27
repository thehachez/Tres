import * as React from 'react';
import { PropsBoxesDataMgTask } from '../../../stores/maProps';

import { ItemClock,
         ItemHash } from '../../svg/items';

interface Props extends PropsBoxesDataMgTask {
    key: number;
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
                    <p>{ this.props.hash }</p>
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
