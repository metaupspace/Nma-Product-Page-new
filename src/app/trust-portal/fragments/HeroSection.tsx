"use client"

import GradientText from '@/components/GradientText'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'


const HeroSection = () => {

  const data = [
    {
      id: 1,
      title: "Security",
      description: "Security is embedded into every layer of our platform—from code to cloud infrastructure."
    },
    {
      id: 2,
      title: "Compliance & Privacy",
      description: "Security is embedded into every layer of our platform—from code to cloud infrastructure."
    }
  ]

  return (
    <section className="realtive bg-white space-y-8 dark:bg-black py-16 pt-36">
      {/* Header Section */}

      <SectionHeader
        className='text-black dark:text-white'
        separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
        title={<>Welcome to our <GradientText>Trust Portal</GradientText></>}
        description=" Your go-to resource for understanding how we protect your data, your customers, and your business."
      />

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mx-auto grid gap-8 mx-auto md:grid-cols-2">
        {/* Security Card */}
        {
          data.map(item => (
            <div key={item.id} className='bg-blue-vertical rounded-md p-[3px]'>
              <div className="p-8 transition-shadow duration-300 bg-white dark:bg-black rounded-md hover:shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-center">
                  {item.title}
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-center">
                    {item.description}
                  </p>
                  <p className="font-medium text-center">
                    Key Security Measures:
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default HeroSection