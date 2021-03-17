import React, {useState} from "react";
import {Inspector} from "./Inspector";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

function parents(el, selector) {
    const parents = [];
    while (el) {
        parents.push(el);
        el = el.parentNode.closest(selector);
    }
    return parents;
}

export function Inspectors({target}) {
    return (<div>
        {parents(target, "[data-component-id]").map(dom => <Inspector target={dom}/>)}
    </div>)
}