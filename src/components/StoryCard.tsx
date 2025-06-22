import React from 'react';

interface StoryCardProps {
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
  layout: 'left' | 'right' | 'top' | 'bottom' | 'center';
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, content, image, imageAlt, layout, index }) => {
  const renderLayout = () => {
    switch (layout) {
      case 'left':
        return (
          <div className="flex gap-8 mb-20 max-w-7xl mx-auto">
            <div className="w-2/5">
              <img 
                src={image}
                alt={imageAlt}
                className="w-full border-4 border-red-700 bg-gray-900"
              />
            </div>
            <div className="w-3/5 bg-gray-900 border-2 border-red-800 p-8">
              <h2 className="text-3xl font-bold text-red-400 mb-6 border-b-2 border-red-700 pb-3">
                {title}
              </h2>
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-5 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );

      case 'right':
        return (
          <div className="flex flex-row-reverse gap-8 mb-20 max-w-7xl mx-auto">
            <div className="w-2/5">
              <img 
                src={image}
                alt={imageAlt}
                className="w-full border-4 border-red-700 bg-gray-900"
              />
            </div>
            <div className="w-3/5 bg-gray-900 border-2 border-red-800 p-8">
              <h2 className="text-3xl font-bold text-red-400 mb-6 border-b-2 border-red-700 pb-3 text-right">
                {title}
              </h2>
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-5 leading-relaxed text-lg text-right">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );

      case 'top':
        return (
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="mb-6 flex justify-center">
              <img 
                src={image}
                alt={imageAlt}
                className="w-96 h-64 border-4 border-red-700 bg-gray-900 object-cover"
              />
            </div>
            <div className="bg-gray-900 border-2 border-red-800 p-8">
              <h2 className="text-3xl font-bold text-red-400 mb-6 text-center border-b-2 border-red-700 pb-3">
                {title}
              </h2>
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-5 leading-relaxed text-lg text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );

      case 'bottom':
        return (
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="bg-gray-900 border-2 border-red-800 p-8 mb-6">
              <h2 className="text-3xl font-bold text-red-400 mb-6 text-center border-b-2 border-red-700 pb-3">
                {title}
              </h2>
              {content.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-5 leading-relaxed text-lg text-center">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex justify-center">
              <img 
                src={image}
                alt={imageAlt}
                className="w-96 h-64 border-4 border-red-700 bg-gray-900 object-cover"
              />
            </div>
          </div>
        );

      case 'center':
        return (
          <div className="mb-20 max-w-4xl mx-auto text-center">
            {image && (
              <div className="mb-8">
                <img 
                  src={image}
                  alt={imageAlt}
                  className="w-80 h-80 mx-auto border-8 border-red-700 bg-gray-900 object-cover"
                />
              </div>
            )}
            {title === "Want More Weird Stories?" ? (
              <div className="bg-black border-4 border-red-700 p-16">
                <h2 className="text-5xl font-bold text-red-400 mb-12 pb-6 border-b-2 border-red-600">
                  {title}
                </h2>
                
                {content.map((paragraph, index) => (
                  <p key={index} className="text-gray-200 mb-8 leading-relaxed text-xl">
                    {paragraph}
                  </p>
                ))}
                
                <div className="mt-16 pt-8 border-t-2 border-red-800">
                  <a 
                    href="https://x.com/boospooky_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-red-800 hover:bg-red-700 text-white px-10 py-4 text-xl font-bold border-2 border-red-600 transition-colors duration-200"
                  >
                    Follow @boospooky_
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gray-900 border-2 border-red-800 p-10">
                <h2 className="text-4xl font-bold text-red-400 mb-8 border-b-2 border-red-700 pb-4">
                  {title}
                </h2>
                {content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-6 leading-relaxed text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return renderLayout();
};

export default StoryCard;