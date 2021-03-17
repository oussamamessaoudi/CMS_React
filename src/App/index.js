import React from "react";
import {useSelector} from "react-redux";
import {EditMode} from "./EditMode";
import {getById} from "../reducers";

export default function App() {
    return (
        <EditMode>
            <Wrapper component={Print} id="dashboard.header">
                <Wrapper component={Print} id="dashboard.body"/>
                <Wrapper component={Button} id="dashboard.button"/>
            </Wrapper>
        </EditMode>
    );
}

function Print(props) {
    return (<div style={{display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
        <span>{props.text}</span>
        {props.children}
    </div>)
}

function Button(props) {
    return <button>{props.title}</button>
}

function Wrapper({component, id, children}) {
    const props = useSelector(state => getById(state, id));
    return (<div data-component-id={id}>
        {React.createElement(component, props, children)}
    </div>)
}
