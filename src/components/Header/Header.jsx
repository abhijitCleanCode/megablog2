import React from 'react'
import { Container } from '../index.js'
import { headerScenary } from '../../assets/index.js'

function Header() {
    return (
        <header>
            <Container>
                <section className="flex flex-wrap justify-center items-center">
                    <div className="space-y-5 font-mono font-bold not-italic tracking-normal leading-relaxed max-w-xl">
                        <h1 className='text-lg text-[#4527a0]'>We make sure you're not just reading, but actually doing</h1>
                        <h1 className='text-2xl text-cyan-500'>Welcome to Spectacles</h1>
                        <article className='text-xl text-[#424242]'>Always ready to lend a helping hand or line of code. Here, we break down complex concepts into bite size pieces, to make sure <strong className='text-[#4527a0] border-b-2 border-b-[#4527a0]'>you're not just reading, but actually doing.</strong></article>
                    </div>

                    <div className='flex-1 flex justify-center items-center py-16 md:py-0'>
                        <img src={headerScenary} alt="header image" className='rounded-lg md:h-[80%] md:w-3/5 object-contain'/>
                    </div>
                </section>
            </Container>
        </header>
    )
}

export default Header