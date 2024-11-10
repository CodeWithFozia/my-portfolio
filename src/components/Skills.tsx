import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-white pt-2'>
                    I have a solid foundation in web development,specializing in HTML, CSS, and JavaScript.My experience extends to using frameworks like React and Next.js to create dynamic and user-freiendly applications.I'm also proficient in Tailwind CSS for efficient stylingand design.With a passion for learning,I stay Updated on the latest Technologies to enhance my skill set and contribute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-8 text-accent text-30xl sm:text-40xl'></div>
                <div className=' text-pink-300 text-[40px] sm:text-[40px] leading-tight flex justify-center items-center'>
                    <h2>Typescript,</h2>
                    <br/>
                     
                    <h2>React.js,</h2>
                    <br/>
                    
                    <h2>Next.js,</h2>
                    <br/>
                    
                </div>
                <div className='text-pink-300 text-[40px] sm:text-[40px] leading-tight flex justify-center items-center '>
                    <h2>Tailwind,</h2>
                    <br/>
                    <h2 >CSS,</h2>
                    <br/>
                    <h2>Node.js,</h2>
                    <br/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
