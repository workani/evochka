import { ChakraProvider, Avatar, Box } from '@chakra-ui/react';
import { FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import React from 'react';

export default function Component() {
  const handleImageLoad = () => {
    console.log('Image loaded successfully');
  };

  const handleImageError = () => {
    console.error('Failed to load image');
  };

  return (
    <ChakraProvider>
      <Box className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Box className="p-6 space-y-6 bg-black rounded-lg flex flex-col items-center justify-center shadow-xl">
          <Avatar id="pfp-avatar" size="3.5xl" src="/eva.jpeg" className="w-48 h-48" alt="Profile picture of Eva" onLoad={handleImageLoad} onError={handleImageError} />
          <h1 className="text-center text-2xl font-semibold text-white">Hi, I'm Eva. Here's links to my social networks:</h1>
          
          <a href="https://www.instagram.com/_y_e_v_a__/" target="_blank" className="w-full h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn instagram">
            <FaInstagram className="text-white mr-2 text-3xl" />
            Instagram
          </a>

          <a href="https://t.me/Inviseblee" target="_blank" className="w-full h-16 bg-gradient-to-r from-blue-500 to-light-blue-500 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn telegram">
            <FaTelegramPlane className="text-white mr-2 text-3xl" />
            Telegram
          </a>
          
          <a href="https://www.tiktok.com/@evchanskiy_1?_t=8hO60oBaQLt&_r=1" target="_blank" className="w-full h-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white text-xl font-bold rounded-lg shadow-lg flex items-center justify-center social-btn tiktok">
            <FaTiktok className="text-white mr-2 text-3xl" />
            TikTok
          </a>
        </Box>
      </Box> 
    </ChakraProvider>
  );
}
