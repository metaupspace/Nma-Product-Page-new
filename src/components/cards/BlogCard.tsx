// components/cards/BlogCard.tsx

import Image from "next/image";

export const BlogCard = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  return (
    <div className="group p-1 w-80 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br from-gray-400 to-gray-600">
      <div className="flex flex-col h-full p-8 transition-all duration-300 rounded-lg cursor-pointer bg-gradient-to-br from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800 group-hover:from-gray-500 group-hover:to-gray-600 group-hover:shadow-xl">
        {/* Content Container - grows to fill space */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-6">
          {/* Blog Icon/Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Overlapping cards with images */}
              <div className="relative flex -space-x-3">
                {images.length > 0 ? (
                  images.slice(0, 3).map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center transition-transform duration-300 transform rounded-full shadow-lg w-14 h-14 group-hover:scale-110"
                      style={{
                        transform: `rotate(${(index - 1) * 8}deg) scale(${
                          1 + index * 0.05
                        })`,
                        zIndex: images.length - index,
                      }}
                    >
                      <Image
                        src={link}
                        alt={`Blog image ${index + 1}`}
                        width={56}
                        height={56}
                        className="object-cover border-white rounded-full shadow-md border-3"
                      />
                    </div>
                  ))
                ) : (
                  // Fallback when no images are available
                  <div className="flex items-center justify-center transition-transform duration-300 border-white rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-500 border-3 group-hover:scale-110">
                    <span className="text-lg font-bold text-white">
                      {title.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Blog Title */}
          <h3 className="px-2 text-lg font-bold text-center text-white transition-colors duration-200 line-clamp-3 group-hover:text-gray-100">
            {title}
          </h3>
        </div>

        {/* Optional bottom section for consistency */}
        <div className="pt-4 mt-4">
          <div className="flex justify-center">
            <span className="text-sm font-medium text-gray-300">Blog Post</span>
          </div>
        </div>
      </div>
    </div>
  );
};
