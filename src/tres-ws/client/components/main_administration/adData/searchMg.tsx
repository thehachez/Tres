import * as React from 'react';
import { ItemSearch } from '../../svg/items';

export default class SearchMg extends React.Component<any, any> {
    render() {
        return (
            <div className="cn_searchmg">
                <ul className="ul_searchmg">
                    <li className="cn_mg_intext">
                        <input className="iptext" type="text" id="searchMg" />
                    </li>
                    <li>
                        <ItemSearch />
                    </li>
                </ul>
            </div>
        )
    }
};

