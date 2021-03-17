import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getById} from "../reducers";

export function Inspector({target}) {
    const id = target.dataset.componentId;
    const props = Object.entries(useSelector(state => getById(state, id)));
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        const value = {};
        for (let input of event.target) {
            if (input.type === "submit") continue;
            value[input.name] = input.value;
        }
        dispatch({type: "SMASH", id, value})
    }

    return (
        <div>
            <h5>{id}</h5>
            <form onSubmit={handleSubmit}>
                {props.map(([key, value]) => {
                    return (<Fragment key={key}>
                        <div className="row pd-10">
                            <label htmlFor={key} className="col-sm-2 col-form-label">{key}</label>
                            <div className="col-sm-10">
                                <input type="text" name={key} className="form-control-plaintext"
                                       defaultValue={value}/>
                            </div>
                        </div>
                    </Fragment>)
                })}
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}