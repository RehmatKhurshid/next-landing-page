"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { DatePickerWithRange } from '@/components/ui/datepickerwithrange'; // Update import path if necessary
import { CalendarIcon, SearchIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Card } from './ui/card';
import { Button } from '@/components/ui/button'

export function Gallery() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
    });

    return (
        <>
            <div className="p-6">
                <div className=" mx-auto">
                    <div className="text-center p-6">
                        <h1 className="text-yellow-600">GALLERY</h1>
                        <h2 className="text-4xl font-bold mt-2">CAPTURING OUR JOURNEY</h2>
                        <p className="mt-4 text-gray-600">
                            This page is a visual chronicle of the milestones and achievements of the National People's Party. Here, you'll find albums showcasing our key events, initiatives, and the vibrant diversity of our communities. From leadership engagements and developmental projects to cultural celebrations and grassroots movements, these images tell the story of our commitment to progress and unity.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 p-6">
                        <div className="flex items-center space-x-2">
                            <SearchIcon className="w-6 h-6 text-yellow-600" />
                            <Input placeholder="Search by title" className="border border-gray-300 rounded-md px-4 py-2" />
                        </div>

                        <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-6 h-6 text-yellow-600" />
                            <DatePickerWithRange className="border border-gray-300 rounded-md px-4 py-2"
                            // selected={date}
                            // onSelect={setDate}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Card className=" py-4 px-4 flex justify-between items-center p-6">
                    <div className="text-left">
                        <h3 className="font-bold">RECENT EVENTS</h3>
                        <p>Highlights and Updates from MPP's Latest Activities and Initiatives</p>
                    </div>
                    <Button variant="default" className="ml-auto bg-yellow-500 text-black rounded-3xl hover:bg-yellow-600">
                        Join MPP
                    </Button>
                </Card>
            </div>
        </>
    );
};

export default Gallery;
