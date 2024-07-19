
import { CarouselDemo } from '@/components/carousel';
import { Gallery }  from "@/components/abc";
import React from 'react'
import ResponsiveCards  from '@/components/imageContext';


const page = () => {
  return (
    <>
      <html lang="en">
        <body className="m-0 p-0"> {/* Ensure there is no margin or padding on the body */}
          <div className="m-0 p-0">
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