import React, { useEffect, useRef, useState } from 'react';
// import * as ScratchBlocks from 'scratch-blocks';



export default function BlocklyComponent() {
    const frameRef = useRef(null);
    const [redux, setRedux] = useState("");

    function onFrameLoad() {
        const win = frameRef.current.contentWindow;
        const vm = win.vm;
        const store = win.ReduxStore;
        console.log('TurboWarp VM ready:', vm, store);

        // wait until the GUI tells us the project finished loading
        const dispose = store.subscribe(() => {
            const state = store.getState();
            if (!state.scratchGui.projectState.loading && !state.scratchGui.projectState.error) {
                // safe to call vm.toJSON() or vm.saveProjectSb3()
                console.log('Project ready, layer order defined');
                console.log('Project JSON:', JSON.parse(vm.toJSON()));
            }
        });

        // Clean up when the component unmounts
        return () => dispose();
    }

    return (
        <div className='w-full h-full'>

            <iframe
                src="/blocks/build/editor.html?project=/projects/test.sb3"
                sandbox="allow-same-origin allow-scripts allow-modals"
                ref={frameRef}
                onLoad={onFrameLoad}
                className='w-full h-full'

            />
            {/* <div

                className='w-full h-full bg-red-500'

            /> */}
            {redux && (
                <div>
                    <h2>Redux State:</h2>
                    <pre>{JSON.stringify(redux, null, 2)}</pre>
                </div>
            )}

        </div>
    );
}