import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
    return (
        <div className="relative overflow-hidden">
            <Carousel className="w-full h-full">
                <CarouselContent className="w-full h-full ">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full h-full flex justify-center items-center">
                            <div className=" w-full h-full flex ">
                                <img 
                                    src={`https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg`}
                                    // alt={`Item ${index + 1}`}
                                    className=" w-full h-80 object-cover"
                                />

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-BLACK" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-BLACK" />
            </Carousel>
        </div>
    )
}

export default CarouselDemo
