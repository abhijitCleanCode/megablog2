import React from 'react'

const SectionWrapper = (Component) =>
    function HOC() {
        return (
            <div className='px-6 pv-10 max-w-7xl mx-auto relative z-0'>
                <Component />
            </div>
        )
    }

export default SectionWrapper