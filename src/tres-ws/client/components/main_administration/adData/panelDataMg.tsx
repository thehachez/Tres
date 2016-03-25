import * as React from 'react';
import { ItemAdd,
    ItemRemove,
    ItemEdit,
    ItemUndo } from '../../svg/items';

export default class PanelDataManagement extends React.Component<any, any> {
    render() {
        return (
            <div className="cn_panel_datamg">
                <ul className="ul_panel_datamg_items">
                    <li>
                        <ItemUndo/>
                    </li>
                    <li>
                        <ItemEdit/>
                    </li>
                    <li>
                        <ItemAdd/>
                    </li>
                    <li>
                        <ItemRemove/>
                    </li>
                </ul>

            </div>
        )
    }
};

