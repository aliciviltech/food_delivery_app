import React, { useEffect, useState } from 'react'
import './SectionTitle.css';

const SectionTitle = ({ text }) => {
    const [isSpan, setIsSpan] = useState(false);
    const [textParts, setTextParts] = useState();
    useEffect(() => {
        if(text){
            if (text.includes('10,000')) {
                setIsSpan(true)
                setTextParts(text.split('10,000'))
            } else {
                setIsSpan(false)
            }
        }
    })

    return (
        <div className='SectionTitle'>
            {isSpan ? (
                <>
                    {textParts[0]}
                    <span style={{ color: 'red' }}>10,000</span>
                    {textParts[1]}
                </>
            ) : (
                text
            )}
        </div>
    )
}

export default SectionTitle