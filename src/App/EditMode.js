import React, {useState} from "react";
import {Inspectors} from "./Inspectors";
import {Selector} from "./Selector";


export function EditMode(props) {
    const [selectedTarget, setSelectedTarget] = useState(undefined);
    const [hoveredTarget, setHoveredTarget] = useState(undefined);

    function mouseMove(ev) {
        const target = ev.target.closest("[data-component-id]");
        if (target) {
            return setHoveredTarget(target);
        }
        setHoveredTarget(undefined);
    }

    function onclick() {
        if (hoveredTarget) {
            return setSelectedTarget(hoveredTarget);
        }
        setSelectedTarget(undefined);
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {width: rect.width, height: rect.height, y: rect.top + scrollTop, x: rect.left + scrollLeft}
    }

    let rect;
    if (selectedTarget) {
        if (hoveredTarget) {
            rect = offset(hoveredTarget);
        } else {
            rect = offset(selectedTarget);
        }
    } else {
        if (hoveredTarget) {
            rect = offset(hoveredTarget);
        }
    }
    return (
        <div>
            {rect && <Selector x={rect.x} y={rect.y} width={rect.width} height={rect.height}/>}
            <div className="col-xs-3" style={{zIndex: 3, background: 'wheat'}}>
                <nav className="bd-links" aria-label="Main navigation"
                     style={{height: '100vh'}}>
                    {selectedTarget && <div>
                        {<Inspectors target={selectedTarget}/>}
                    </div>}
                </nav>
            </div>
            <main role="main" className="col-xs-9 bd-content" onMouseMove={mouseMove} onClick={onclick}
                  style={{height: '100vh', paddingTop: '50px'}}>
                {props.children}
            </main>
        </div>
    )
}