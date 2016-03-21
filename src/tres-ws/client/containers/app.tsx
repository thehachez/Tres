/// <reference path='../../typings/tsd.d.ts'/>
import * as React from 'react';
import Store from '../stores/store';

interface Props {
    title: string;
    children: any;
}

export class App extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = this.getState();
        this.onChange = this.onChange.bind(this);
    }

    getState() {
        return Store.getState();
    }

    componentDidMount() {
        Store.listen(this.onChange);
    }

    componentWillUnmount() {
        Store.unlisten(this.onChange);
    }

    onChange(state: any) {
        this.setState(state);
    }

    render() {
        return (
            <div id="main">
                { this.props.children }
            </div>
        )
    }
};