import React from 'react'

import BlockEditor from 'components/BlockEditor'
import { Link } from 'react-router-dom'

function LabRoom({ lab }) {
    return (
        <div className='flex flex-col gap-5 p-10 '>
            <h2 className='text-4xl font-bold text-primary text-center'>{lab.name}</h2>
            <div className='flex flex-wrap gap-5 justify-between'>
                {lab.trials?.map((trial) => (
                    <Link key={trial.id} to={"/trial/" + lab.id + "/" + trial.id} className='p-2 cursor-pointer'>
                        <div className='border-2 border-primary bg-background-light shadow-md rounded-lg p-5'>
                            <h3 className='text-xl font-bold text-primary'>{trial.name}</h3>
                            <p className='text-gray-600'>{trial.description}</p>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LabRoom