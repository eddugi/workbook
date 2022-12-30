/* @jsx createElement */

import { createDOM, render, createElement } from "./react";


const vdom = <p>
    <h1>하나둘셋</h1>  
    <ul>
        <li style="color:red">하나</li>
        <li style="color:blue">둘</li>
        <li style="color:green">셋</li>
    </ul>
    </p>

render(vdom, document.querySelector('#root'))