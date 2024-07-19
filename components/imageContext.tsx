import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';

export default function ResponsiveCards() {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <Card className="w-full flex flex-col relative">
                        <div className="w-full">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg"
                                alt="Placeholder"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <CardHeader>
                                <CardDescription>
                                    {/* Add the date here */}
                                    <em className="text-sm text-gray-500">July 19, 2024</em>
                                </CardDescription>
                                <CardTitle>FOUNDATION</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-between mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo delectus repellendus, dolorem praesentium officia culpa eligendi ipsa qui accusantium, veniam eos nulla autem est, ipsum molestias quibusdam alias nesciunt sit?
                            </CardFooter>
                        </div>
                        {/* Arrow with circle indicating more content */}
                        <div className="absolute bottom-4 right-4 flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white shadow-md">
                                <svg className="w-6 h-6 text-gray-600 rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </Card>




                    {/* Card 2 */}
                    <Card className="w-full flex flex-col relative">
                        <div className="w-full">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg"
                                alt="Placeholder"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <CardHeader>
                                <CardDescription>
                                    {/* Add the date here */}
                                    <em className="text-sm text-gray-500">July 19, 2024</em>
                                </CardDescription>
                                <CardTitle>FOUNDATION</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-between mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo delectus repellendus, dolorem praesentium officia culpa eligendi ipsa qui accusantium, veniam eos nulla autem est, ipsum molestias quibusdam alias nesciunt sit?
                            </CardFooter>
                        </div>
                        {/* Arrow with circle indicating more content */}
                        <div className="absolute bottom-4 right-4 flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white shadow-md">
                                <svg className="w-6 h-6 text-gray-600 rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </Card>






                    {/* Card 3 */}
                    <Card className="w-full flex flex-col relative">
                        <div className="w-full">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg"
                                alt="Placeholder"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <CardHeader>
                                <CardDescription>
                                    {/* Add the date here */}
                                    <em className="text-sm text-gray-500">July 19, 2024</em>
                                </CardDescription>
                                <CardTitle>FOUNDATION</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-between mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo delectus repellendus, dolorem praesentium officia culpa eligendi ipsa qui accusantium, veniam eos nulla autem est, ipsum molestias quibusdam alias nesciunt sit?
                            </CardFooter>
                        </div>
                        {/* Arrow with circle indicating more content */}
                        <div className="absolute bottom-4 right-4 flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white shadow-md">
                                <svg className="w-6 h-6 text-gray-600 rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </Card>




                    {/* Card 4 */}
                    <Card className="w-full flex flex-col relative">
                        <div className="w-full">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg"
                                alt="Placeholder"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <CardHeader>
                                <CardDescription>
                                    {/* Add the date here */}
                                    <em className="text-sm text-gray-500">July 19, 2024</em>
                                </CardDescription>
                                <CardTitle>FOUNDATION</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-between mt-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo delectus repellendus, dolorem praesentium officia culpa eligendi ipsa qui accusantium, veniam eos nulla autem est, ipsum molestias quibusdam alias nesciunt sit?
                            </CardFooter>
                        </div>
                        {/* Arrow with circle indicating more content */}
                        <div className="absolute bottom-4 right-4 flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white shadow-md">
                                <svg className="w-6 h-6 text-gray-600 rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </Card>




                </div>
            </div >
        </div >
    );
}
