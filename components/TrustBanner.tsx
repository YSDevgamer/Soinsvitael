
import React from 'react';

const TrustBanner: React.FC = () => {
  const logos = [
    "https://assets.lightfunnels.com/cdn-cgi/image/width=384,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/cfa91da7-2136-4e03-855d-2f7f4a4fa838.Nooro Body Massager™ Muscle Pain Relief Device – nooro US (3).png",
    "https://assets.lightfunnels.com/cdn-cgi/image/width=384,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/67d79e3a-cb17-4e36-a2e2-1c63463bf390.Nooro Body Massager™ Muscle Pain Relief Device – nooro US (8).png",
    "https://assets.lightfunnels.com/cdn-cgi/image/width=384,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/f6a701d3-5801-4bb9-82e6-849c0b3f56a5.Nooro Body Massager™ Muscle Pain Relief Device – nooro US (6).png",
    "https://assets.lightfunnels.com/cdn-cgi/image/width=384,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/d16b5b44-5ec0-4c4d-b5a4-3cc7aaedd130.Nooro Body Massager™ Muscle Pain Relief Device – nooro US (2).png",
    "https://assets.lightfunnels.com/cdn-cgi/image/width=384,quality=80,format=auto/https://assets.lightfunnels.com/account-1/images_library/050e4303-ddd9-4fc2-8819-7045f67879e8.Nooro Body Massager™ Muscle Pain Relief Device – nooro US (10).png"
  ];

  return (
    <div className="bg-[#f4f5f3] py-8 overflow-hidden border-y border-gray-200">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-20 mx-10 shrink-0">
            {logos.map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Partner Brand" 
                className="h-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
