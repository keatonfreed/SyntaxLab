import React, { useEffect, useRef } from 'react';
// import * as ScratchBlocks from 'scratch-blocks';



export default function BlocklyComponent() {
    const blocklyDiv = useRef(null);
    const workspace = useRef(null);

    // useEffect(() => {
    //     workspace.current = ScratchBlocks.inject(blocklyDiv.current, {
    //         toolbox: `
    //     <xml>
    //       <category name="Control" colour="#FFAB19">
    //         <block type="controls_if"></block>
    //         <block type="controls_repeat_ext"></block>
    //       </category>
    //       <category name="Motion" colour="#4C97FF">
    //         <block type="motion_movesteps"></block>
    //       </category>
    //     </xml>
    //   `,
    //         horizontalLayout: false,
    //         scrollbars: true,
    //         zoom: {
    //             controls: true,
    //             wheel: true,
    //             startScale: 1,
    //             maxScale: 1.5,
    //             minScale: 0.5,
    //             scaleSpeed: 1.2,
    //         },
    //     });
    // }, []);

    // const getCode = () => {
    //     const code = ScratchBlocks.JavaScript.workspaceToCode(workspace.current);
    //     console.log(code);
    // };

    return (
        <div>
            {/* <div
                ref={blocklyDiv}
                style={{
                    height: '400px',
                    width: '600px',
                    border: '2px solid #333',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#1e1e1e' // Dark mode example
                }}
            ></div>            <button onClick={runCode}>Run Code</button> */}
            {/* <iframe src="https://turbowarp.org/editor" width="100%" height="600px"></iframe> */}
            <iframe
                src="/blocks/tw-gui/build/index.html?project=/projects/test.sb3&standalone=1"
                width="482" height="412" sandbox="allow-scripts" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen
            />

        </div>
    );
}