import { getIndustryInsights } from '@/actions/dashboard'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'
import { get } from 'react-hook-form'
import DashboardView from './_components/dashbaord-view'

const IndustryInsightsPage =async () => {
     const {isOnboarded} = await getUserOnboardingStatus()
    const insights = await getIndustryInsights()

      if (!isOnboarded) {
        redirect ('/onboarding')
      }
  return (
    <div className='container mx-auto'>
      <DashboardView insights={insights}/>
    </div>
  )
}

export default IndustryInsightsPage
