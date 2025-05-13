import React from 'react'

import BlockEditor from 'components/BlockEditor'

function LabRoom({ lab }) {
    return (
        <div className='flex flex-col gap-5 p-10 '>
            <h2 className='text-xl font-bold'>{lab.name}</h2>
            <p className='text-gray-600'>{JSON.stringify(lab.trials)}</p>
            <BlockEditor></BlockEditor>
        </div>
    )
}

export default LabRoom