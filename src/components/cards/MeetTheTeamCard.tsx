import Image from 'next/image';
import React from 'react'

export interface MeetTheTeamCardProp {
    image: string;
    name: string;
    designation: string;
    bio: string;
}

const MeetTheTeamCard: React.FC<MeetTheTeamCardProp> = ({
    image,
    name,
    designation,
    bio
}) => {
    return (
        <div className="group relative w-full h-80 bg-white text-center shadow-md rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:scale-105">
            {/* Image Section */}
            <div className="relative h-full w-full">
                {image ? (
                    <Image
                        className="w-full h-full object-cover"
                        src={image}
                        alt={name}
                        fill
                    />
                ) : (
                    // Placeholder when no image
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <div className="text-gray-400 text-4xl">👤</div>
                    </div>
                )}
            </div>

            {/* Default overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-vertical text-white p-4 rounded-t-xl transition-all duration-500 group-hover:bottom-full group-hover:opacity-0">
                <h6 className="font-medium text-xl">{name}</h6>
                <p className="text-sm opacity-90">({designation})</p>
            </div>

            {/* Hover overlay - full card */}
            <div className="absolute inset-0 bg-blue-vertical text-white p-2 flex flex-col justify-center items-center opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 rounded-xl">
                <h6 className="font-medium text-xl mb-2">{name}</h6>
                <p className="text-sm opacity-90 mb-4">({designation})</p>
                <p className="text-sm leading-relaxed text-center overflow-y-auto max-h-40">
                    {bio}
                </p>
            </div>
        </div>
    )
}

export default MeetTheTeamCard