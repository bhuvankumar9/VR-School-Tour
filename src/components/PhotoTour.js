import React, { useState, useRef } from 'react';
import Photo360Viewer from './Photo360Viewer';
import '../App.css'; // Adjust the import path as needed
const images = [
  {
    src: '/Auditorium.jpg',
    name: 'Auditorium',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
      { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
    ],
  },
  {
    src: '/Corridor.jpg',
    name: 'Corridor',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
      { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
    ],
  },
  {
    src: '/Reception.jpg',
    name: 'Reception',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
      { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
    ],
  },
  {
    src: '/Reception.jpg',
    name: 'Reception',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
      { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
    ],
  },
  {
    src: '/Reception.jpg',
    name: 'Reception',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
      { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
    ],
  },
  {
    src: '/Reception.jpg',
    name: 'Reception',
    navPoints: [
      { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
      { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
    ],
  },
  // Add more images and navigation points as needed
];

const PhotoTour = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isThumbnailVisible, setThumbnailVisible] = useState(true);
  const thumbnailPanelRef = useRef(null);

  const handleNavigation = (targetIndex) => {
    setCurrentImage(targetIndex);
  };

  const scrollThumbnails = (direction) => {
    const panel = thumbnailPanelRef.current;
    if (direction === 'up') {
      panel.scrollTop -= 70; // Adjust the scroll amount as needed
    } else if (direction === 'down') {
      panel.scrollTop += 70; // Adjust the scroll amount as needed
    }
  };

  const handleControlAction = (action) => {
    // Dispatch custom event for control actions
    window.dispatchEvent(new CustomEvent('controlAction', { detail: { action } }));
  };

  const toggleThumbnailPanel = () => {
    setThumbnailVisible(!isThumbnailVisible);
  };

  return (
    <div className="photo-tour-container">
      {isThumbnailVisible && (
        <div className="image-panel">
          <button className="scroll-button" onClick={() => scrollThumbnails('up')}>▲</button>
          <div className="thumbnails" ref={thumbnailPanelRef}>
            {images.map((img, index) => (
              <div
                key={index}
                className="thumbnail-container"
                onClick={() => handleNavigation(index)}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className={index === currentImage ? 'active-thumbnail' : ''}
                />
                <div className="thumbnail-label">{img.name}</div>
              </div>
            ))}
          </div>
          <button className="scroll-button" onClick={() => scrollThumbnails('down')}>▼</button>
        </div>
      )}
      <Photo360Viewer
        image={images[currentImage].src}
        navPoints={images[currentImage].navPoints}
        handleNavigation={handleNavigation}
      />
      <div className="control-panel">
        <div className="control-buttons">
          <button onClick={() => handleControlAction('up')}>▲</button>
        </div>
        <div className="control-buttons">
          <button onClick={() => handleControlAction('left')}>◄</button>
          <button onClick={() => handleControlAction('right')}>►</button>
        </div>
        <div className="control-buttons">
          <button onClick={() => handleControlAction('down')}>▼</button>
        </div>
        <div className="zoom-buttons">
          <button onClick={() => handleControlAction('zoom-in')}>+</button>
          <button onClick={() => handleControlAction('zoom-out')}>-</button>
        </div>
        <div className="control-buttons">
          <button onClick={toggleThumbnailPanel}>
            {isThumbnailVisible ? '⭕' : '❌ '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoTour;






















// import React, { useState, useRef } from 'react';
// import Photo360Viewer from './Photo360Viewer';
// import '../App.css'; // Adjust the import path as needed

// const images = [
//   {
//     src: '/Auditorium.jpg',
//     name: 'Auditorium',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Corridor.jpg',
//     name: 'Corridor',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   // Add more images and navigation points as needed
// ];

// const PhotoTour = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const thumbnailPanelRef = useRef(null);

//   const handleNavigation = (targetIndex) => {
//     setCurrentImage(targetIndex);
//   };

//   const scrollThumbnails = (direction) => {
//     const panel = thumbnailPanelRef.current;
//     if (direction === 'up') {
//       panel.scrollTop -= 70; // Adjust the scroll amount as needed
//     } else if (direction === 'down') {
//       panel.scrollTop += 70; // Adjust the scroll amount as needed
//     }
//   };

//   const handleControlAction = (action) => {
//     // Dispatch custom event for control actions
//     window.dispatchEvent(new CustomEvent('controlAction', { detail: { action } }));
//   };
  

//   return (
//     <div className="photo-tour-container">
//       <div className="image-panel">
//         <button className="scroll-button" onClick={() => scrollThumbnails('up')}>▲</button>
//         <div className="thumbnails" ref={thumbnailPanelRef}>
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="thumbnail-container"
//               onClick={() => handleNavigation(index)}
//             >
//               <img
//                 src={img.src}
//                 alt={img.name}
//                 className={index === currentImage ? 'active-thumbnail' : ''}
//               />
//               <div className="thumbnail-label">{img.name}</div>
//             </div>
//           ))}
//         </div>
//         <button className="scroll-button" onClick={() => scrollThumbnails('down')}>▼</button>
//       </div>
//       <Photo360Viewer
//         image={images[currentImage].src}
//         navPoints={images[currentImage].navPoints}
//         handleNavigation={handleNavigation}
//       />
//       {/* Control panel buttons for rotation and zoom */}
//       <div className="control-panel">
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('up')}>▲</button>
//         </div>
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('left')}>◄</button>
//           <button onClick={() => handleControlAction('right')}>►</button>
//         </div>
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('down')}>▼</button>
//         </div>
//         <div className="zoom-buttons">
//           <button onClick={() => handleControlAction('zoom-in')}>+</button>
//           <button onClick={() => handleControlAction('zoom-out')}>-</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoTour;






























// import React, { useState, useRef } from 'react';
// import Photo360Viewer from './Photo360Viewer';
// import '../App.css'; // Adjust the import path as needed

// const images = [
//   {
//     src: '/Auditorium.jpg',
//     name: 'Auditorium',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Corridor.jpg',
//     name: 'Corridor',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   // Add more images and navigation points as needed
// ];

// const PhotoTour = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const thumbnailPanelRef = useRef(null);

//   const handleNavigation = (targetIndex) => {
//     setCurrentImage(targetIndex);
//   };

//   const scrollThumbnails = (direction) => {
//     const panel = thumbnailPanelRef.current;
//     if (direction === 'up') {
//       panel.scrollTop -= 70; // Adjust the scroll amount as needed
//     } else if (direction === 'down') {
//       panel.scrollTop += 70; // Adjust the scroll amount as needed
//     }
//   };

//   const handleControlAction = (action) => {
//     // Dispatch custom event for control actions
//     window.dispatchEvent(new CustomEvent('controlAction', { detail: { action } }));
//   };

//   return (
//     <div className="photo-tour-container">
//       <div className="image-panel">
//         <button className="scroll-button" onClick={() => scrollThumbnails('up')}>▲</button>
//         <div className="thumbnails" ref={thumbnailPanelRef}>
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="thumbnail-container"
//               onClick={() => handleNavigation(index)}
//             >
//               <img
//                 src={img.src}
//                 alt={img.name}
//                 className={index === currentImage ? 'active-thumbnail' : ''}
//               />
//               <div className="thumbnail-label">{img.name}</div>
//             </div>
//           ))}
//         </div>
//         <button className="scroll-button" onClick={() => scrollThumbnails('down')}>▼</button>
//       </div>
//       <Photo360Viewer
//         image={images[currentImage].src}
//         navPoints={images[currentImage].navPoints}
//         handleNavigation={handleNavigation}
//       />
//       {/* Control panel buttons for rotation and zoom */}
//       <div className="control-panel">
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('up')}>▲</button>
//         </div>
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('left')}>◄</button>
//           <button onClick={() => handleControlAction('right')}>►</button>
//         </div>
//         <div className="control-buttons">
//           <button onClick={() => handleControlAction('down')}>▼</button>
//         </div>
//         <div className="zoom-buttons">
//           <button onClick={() => handleControlAction('zoom-in')}>+</button>
//           <button onClick={() => handleControlAction('zoom-out')}>-</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoTour;









// import React, { useState } from 'react';
// import Photo360Viewer from './Photo360Viewer';
// import '../App.css'; // Adjust the import to point to the correct path

// const images = [
//   {
//     src: '/Auditorium.jpg',
//     name: 'Auditorium',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Corridor.jpg',
//     name: 'Corridor',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   // Add more images and navigation points as needed
//   {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   }, {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   }, {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   }, {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   }, {
//     src: '/Reception.jpg',
//     name: 'Reception',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },  
// ];

// const PhotoTour = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const handleNavigation = (targetIndex) => {
//     setCurrentImage(targetIndex);
//   };

//   return (
//     <div className="photo-tour-container">
//       <div className="image-panel">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="thumbnail-container"
//             onClick={() => handleNavigation(index)}
//           >
//             <img
//               src={img.src}
//               alt={img.name}
//               className={index === currentImage ? 'active-thumbnail' : ''}
//             />
//             <div className="thumbnail-label">{img.name}</div>
//           </div>
//         ))}
//       </div>
//       <Photo360Viewer
//         image={images[currentImage].src}
//         navPoints={images[currentImage].navPoints}
//         handleNavigation={handleNavigation}
//       />
//     </div>
//   );
// };

// export default PhotoTour;




















// import React, { useState } from 'react';
// import Photo360Viewer from './Photo360Viewer';
// import '../App.css'; // Adjust the import to point to the correct path

// const images = [
//   {
//     src: '/Auditorium.jpg',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Corridor.jpg',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 2, label: 'To Reception' },
//     ],
//   },
//   {
//     src: '/Reception.jpg',
//     navPoints: [
//       { x: -1, y: 1.6, z: -3, targetIndex: 0, label: 'To Auditorium' },
//       { x: 1, y: 1.6, z: -3, targetIndex: 1, label: 'To Corridor' },
//     ],
//   },
//   // Add more images and navigation points as needed
// ];

// const PhotoTour = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const handleNavigation = (targetIndex) => {
//     setCurrentImage(targetIndex);
//   };

//   return (
//     <div className="photo-tour-container">
//       <div className="image-panel">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="thumbnail-container"
//             onClick={() => handleNavigation(index)}
//           >
//             <img
//               src={img.src}
//               alt={`Thumbnail ${index}`}
//               className={index === currentImage ? 'active-thumbnail' : ''}
//             />
//             <div className="thumbnail-label">{`Thumbnail ${index}`}</div>
//           </div>
//         ))}
//       </div>
//       <Photo360Viewer
//         image={images[currentImage].src}
//         navPoints={images[currentImage].navPoints}
//         handleNavigation={handleNavigation}
//       />
//     </div>
//   );
// };

// export default PhotoTour;



