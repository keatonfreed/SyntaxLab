import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BlockEditor from 'components/BlockEditor'

function Trial({ labs }) {
    let { labId, trialId } = useParams();
    labId = Number(labId);
    trialId = Number(trialId);

    const [lab, setLab] = useState({});
    const [trial, setTrial] = useState({});

    useEffect(() => {
        if (!labs.length) return;
        const lab = labs.find(lab => lab?.id === labId);
        const trial = lab.trials?.find(trial => trial?.id === trialId);

        if (!lab || !trial) {
            console.error('Lab or Trial not found');
            return;
        }
        setLab(lab);
        setTrial(trial);
    }, [trialId, labId, labs]);

    return (
        <>
            <div className='flex items-center justify-between py-5 px-5  gap-30 border-b-2 border-background-light'>
                <h1 className='text-2xl font-bold'>{lab.name} | {trial.name}</h1>
                <h1 className='text-xl font-bold text-border'>{trial.description}</h1>
            </div>
            <div className='flex w-full grow divide-border divide-y-2'>
                <BlockEditor lab={lab} />
            </div>
        </>
    )
}

export default Trial