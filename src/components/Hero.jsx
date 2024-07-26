import React from 'react'



// this is to become the props default if we dont passing the new props after calling the component
const defaultProps = {
    title: 'become a react dev',
    subtitle: 'find the react job that fits your set'
}

const Hero = (props) => {
    
    // this is to use/passing the default props
    const { title, subtitle} = {...defaultProps, ...props}
  return (
     <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
