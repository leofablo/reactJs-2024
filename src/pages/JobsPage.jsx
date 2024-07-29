import React from 'react'
import JobsLisings from '../components/JobsLisings'

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
         {/* <Input
        type="text"
        placeholder="Search for jobs.."
         
        /> */}
        <JobsLisings />

    </section>
  )
}

export default JobsPage

