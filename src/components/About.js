import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 ">
        Hi there! My name is John Vundi and I'm a software engineer with  experience in the industry. I have a Bachelor's degree in IT and I am passionate about using technology to solve real-world problems.

My expertise lies in building scalable, efficient, and user-friendly applications using the latest web technologies such as React, Node.js, HTML and CSS. I have a strong understanding of software development methodologies, including Ruby and Rails, and I am committed to delivering high-quality code. 
        </p>
        <br/>
        <p className="text-xl">
        My ultimate goal is to continue learning and growing as a software engineer, and to work on projects that make a positive impact on society. I am always on the lookout for new challenges and opportunities to collaborate with other talented individuals. If you have a project that you would like to discuss, please feel free to reach out to me.
        </p>
      </div>

    </div>
  )
}

export default About
