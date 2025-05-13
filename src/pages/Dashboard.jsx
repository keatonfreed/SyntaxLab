import React, { useState, useEffect } from 'react'

import LabRoom from 'components/LabRoom'

function Dashboard({ labs }) {

    const [completedPercent, setCompletedPercent] = useState(0);

    useEffect(() => {
        const completedLabs = labs.filter(lab => lab.completed).length;
        const totalLabs = labs.length;
        const percent = (completedLabs / totalLabs) * 100;
        setCompletedPercent(percent);
    }, [labs]);

    return (
        <>
            <div className='flex items-center justify-between p-10 gap-30'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <div className='flex items-center gap-5 justify-between grow'>
                    {/* <p >Start</p> */}
                    <div className='bg-background-light rounded-xl h-4 grow-5'>

                        <div className='bg-primary rounded-xl h-4 w-0 transition-all ease duration-500' style={{ width: completedPercent + '%' }}></div>
                    </div>
                    <p>Complete</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 divide-primary-dark divide-y-2 border-t-2 border-b-2 border-primary-dark'>
                {labs.map(lab => (
                    <LabRoom key={lab.id} lab={lab} />
                ))}
            </div>
        </>
    )
}

export default Dashboard