import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo() {
    return (
        <div className="relative overflow-hidden">
            <Carousel className="w-full h-full">
                <CarouselContent className="w-full h-full ">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full h-full flex justify-center items-center">
                            <div className="relative w-screen h-screen overflow-hidden">
                                <Image
                                    src="/images/Rectangle-160390.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Picture of the author"
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
