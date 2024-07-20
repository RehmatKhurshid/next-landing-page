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
import { Button } from "./ui/button"

export function CarouselDemo() {
    return (
        <div className="relative overflow-hidden">
            <Carousel className="w-full h-full">
                <CarouselContent className="w-full h-full ">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full h-full flex justify-center items-center relative">
                            <div className="relative w-screen h-screen overflow-hidden">
                                <Image
                                    src="/images/Rectangle-160390.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Picture of the author"
                                    className="w-full h-full object-cover"
                                />

                                {/* Parent Container for Icons and Text */}
                                <div className="absolute bottom-24 left-4 flex flex-col space-y-4 z-20 ">

                                    {/* Icon Container */}
                                    <div className="flex space-x-4 bg-opacity-50 p-2 rounded absolute right-80 -translate-x-16">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-yellow-500">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-yellow-500">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-yellow-500">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-yellow-500">
                                            <i className="fab fa-instagram"></i>
                                        </a>

                                    </div>

                                    {/* Text Container */}
                                    <div className="flex flex-col  bg-opacity-50 p-6 rounded">
                                        <h1 className="text-white text-3xl font-bold">
                                            Foundation for
                                            <span className="block text-yellow-500 text-3xl font-bold mt-2">
                                                P. A. Sangma
                                            </span>
                                            Integrated Sports Complex Tura
                                        </h1>
                                    </div>
                                </div>

                                {/* Button Container */}
                                <div className="absolute bottom-8 left-4 flex items-center  bg-opacity-50 p-6 rounded z-10">
                                    <Button variant="default" className="ml-auto bg-yellow-500 text-black rounded-3xl hover:bg-yellow-600">
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white" />
            </Carousel>
        </div>
    )
}

export default CarouselDemo
