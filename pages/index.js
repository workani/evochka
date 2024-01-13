import { ChakraProvider, Avatar, Box } from '@chakra-ui/react';
import { FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Component() {
  const lowQualitySrc = '/eva.jpeg';
  const highQualitySrc = '/eva.png';
  const [imageSrc, setImageSrc] = useState(lowQualitySrc); // Start with low-res image
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
    setImageSrc(highQualitySrc); // Fallback to high-res image on error
  };

  return (
    <ChakraProvider>
      <div className="bg-gradient-to-r from-teal-400 via-purple-400 to-indigo-500 text-white min-h-screen w-full flex items-center justify-center">
    <div className="absolute w-full h-full max-w-md p-6 space-y-6 bg-black bg-opacity-50 md:rounded-3xl md:shadow-2xl md:max-h-[90vh] overflow-auto">
      
        {imageLoadError && (
            <Box textAlign="center">
                <p>Loading high-resolution image...</p>
            </Box>
        )}

     
        <div className="flex justify-center">
            <Avatar
                src={imageSrc}
                size="3.5xl"
                className="w-48 h-48 size-3.5xl border-4 border-white rounded-full overflow-hidden shadow-lg"
                alt="Profile picture"
                onError={handleImageError}
            />
        </div>
          <h1 className="text-center text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Hi, I'm Eva. Here's links to my social networks:
          </h1>
          
          {/* Social Links */}
          {/* Instagram */}
          <div className="bg-black rounded-lg">
            <a href="https://www.instagram.com/_y_e_v_a__/" target="_blank" className="w-full h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn instagram">
              <FaInstagram className="text-white mr-2 text-3xl" />
              Instagram
            </a>
          </div>

          {/* Telegram */}
          <div className="bg-black rounded-lg">
            <a href="https://t.me/Inviseblee" target="_blank" className="w-full h-16 bg-gradient-to-r from-blue-500 to-light-blue-500 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn telegram">
              <FaTelegramPlane className="text-white mr-2 text-3xl" />
              Telegram
            </a>
          </div>

          {/* TikTok */}
          <div className="bg-black rounded-lg">
            <a href="https://www.tiktok.com/@evchanskiy_1?_t=8hO60oBaQLt&_r=1" target="_blank" className="w-full h-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn tiktok">
              <FaTiktok className="text-white mr-2 text-3xl" />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
