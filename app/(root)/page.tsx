import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice app</h2>
          <p className='text-lg'>
            Practice on real interview questions and get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full' >
            <Link href="/interview">Start an Interview</Link>
          </Button>

        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden' />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interview</h2>
      <div className='interviews-section'>
        {dummyInterviews.map( (interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))}
        <p className=''>You haven&pos;t taken any interviews yet.</p>
      </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          <p>There is no interviews avilable.</p>
        </div>
      </section>
    </>
  )
}

export default Page