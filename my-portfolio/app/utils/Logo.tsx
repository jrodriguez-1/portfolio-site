import React from 'react';
import { memo } from 'react';

const Logo: React.FC = memo(() => (
  <div className="logo flex justify-center items-center border-4 border-gray-300 w-16 h-16 sm:w-14 sm:h-14 glitch-text">
    <h1 className="logo-text text-xl sm:text-2xl glitch-text tracking-wider font-bold">JR</h1>
  </div>
));

Logo.displayName = 'Logo';

export default Logo;