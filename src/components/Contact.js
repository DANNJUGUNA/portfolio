import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-700 p-4 text-white">
      <dv className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Lets get in touch</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/bb3f5cba-6c53-4239-b8fd-7e04d2daeea5" method="POST" className="flex flex-col w-full md:w-1/2 ">
                <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"/>
                <input type="text" name="email" placeholder="Email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"/>
                <textarea name="message"   rows="10" placeholder="Message" className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"></textarea>
                <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send</button>
            </form>
        </div>
      </dv>
    </div>
  )
}

export default Contact
