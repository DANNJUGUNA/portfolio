
import React from 'react'
 import ireporter from "../assets/Ireporter.png"
 import food from "../assets/food.png"
// import barberShop from "../assets/portfolio/barberShop .jpg"
// import navbar from "../assets/portfolio/navbar.jpg"
// import botBattlr from "../assets/portfolio/bottBattlr2 .jpg"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
// import ramenRater from "../assets/portfolio/ramenRater.jpg"
function Portfolio() {
    const portfolios = [
        {
            id: 1,
             src: ireporter,
            href:"https://ireport-eight.vercel.app/",
            desc:"iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention"
        },
        {
            id: 2,
             src: food,
            href:"https://visionary-haupia-d2070d.netlify.app/",
            desc:""
        }
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-purple-800 to-black text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work</p>
        </div>

           

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-0">
        {
           portfolios.map(({id, src, href,desc })=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src}
             alt=""
             className="rounde-md duration-200 hover:scale-105"/>
             
            <div className="flex items-center justify-center">
            <a   href={href}
            className="flex justify-center items-center w-full text-white"
            ><button className="w-1/2 px-6 py-3 m-4 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500">check out</button></a>
           
            </div>
            </div>
           ))
           
           } 
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
