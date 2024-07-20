
import { CarouselDemo } from '@/components/carousel';
import { Gallery }  from "@/components/gallery";
import React from 'react'
import ResponsiveCards  from '@/components/imageContext';


const page = () => {
  return (
    <>
      <html lang="en">
        <body> 
          <div className="m-4">
            <CarouselDemo />
            <Gallery />
            <ResponsiveCards />
          </div>
        </body>
      </html>
    </>
  )
}

export default page