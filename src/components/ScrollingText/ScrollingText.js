import './ScrollingText.css'

import {MathJax, MathJaxContext } from 'better-react-mathjax';

function ScrollingText({text="text", anDur=4, size=1}) {


    return (
        // <p className="scrollTest1" style={{animationDuration: `${anDur}s`, fontSize: `${size}rem`}}>
        //     {text}
        // </p>

        <MathJaxContext>
            <p
                className="scrollTest1"
                style={{ animationDuration: `${anDur}s`, fontSize: `${size}rem` }}
            >
                <MathJax inline={false}>
                    {text}
                </MathJax>
            </p>
        </MathJaxContext>
    )
}

export default ScrollingText;