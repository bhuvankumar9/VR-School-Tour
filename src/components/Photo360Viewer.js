import React, { useRef, useEffect, useCallback } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const Photo360Viewer = ({ image, navPoints, handleNavigation }) => {
  const cameraRef = useRef(null);

  useEffect(() => {
    cameraRef.current = document.querySelector('[camera]');
  }, []);

  // Function to handle zooming in
  const handleZoomIn = useCallback(() => {
    if (cameraRef.current) {
      const currentZoom = cameraRef.current.getAttribute('camera').zoom || 1;
      cameraRef.current.setAttribute('camera', 'zoom', currentZoom + 0.1);
    }
  }, []);

  // Function to handle zooming out
  const handleZoomOut = useCallback(() => {
    if (cameraRef.current) {
      const currentZoom = cameraRef.current.getAttribute('camera').zoom || 1;
      cameraRef.current.setAttribute('camera', 'zoom', currentZoom - 0.1);
    }
  }, []);

  // Function to handle rotation based on direction ('left', 'right', 'up', 'down')
  const handleRotate = useCallback((direction) => {
    if (cameraRef.current) {
      const rotation = { ...cameraRef.current.getAttribute('rotation') };
      switch (direction) {
        case 'left':
          rotation.y -= 10;
          break;
        case 'right':
          rotation.y += 10;
          break;
        case 'up':
          rotation.x -= 10;
          break;
        case 'down':
          rotation.x += 10;
          break;
        default:
          break;
      }
      cameraRef.current.setAttribute('rotation', rotation);
    }
  }, []);

  // Effect to add event listener for 'controlAction' events and cleanup
  useEffect(() => {
    const handleControl = (event) => {
      const action = event.detail.action;
      switch (action) {
        case 'up':
        case 'down':
        case 'left':
        case 'right':
          handleRotate(action);
          break;
        case 'zoom-in':
          handleZoomIn();
          break;
        case 'zoom-out':
          handleZoomOut();
          break;
        default:
          break;
      }
    };

    window.addEventListener('controlAction', handleControl);

    return () => {
      window.removeEventListener('controlAction', handleControl);
    };
  }, [handleRotate, handleZoomIn, handleZoomOut]);

  // Function to handle navigation when a navigation point is clicked
  const handleClickNavigation = useCallback((targetIndex) => {
    handleNavigation(targetIndex);
  }, [handleNavigation]);

  return (
    <div className="viewer-container">
      <Scene>
        <Entity primitive="a-sky" src={image} />
        <Entity camera look-controls ref={cameraRef} position="0 1.6 0">
          <Entity cursor="fuse: false; rayOrigin: mouse" />
        </Entity>
        {navPoints.map((point, index) => (
          <Entity
            key={index}
            geometry={{ primitive: 'circle', radius: 0.5 }}
            material={{ color: 'red', opacity: 0.7 }}
            position={`${point.x} ${point.y} ${point.z}`}
            events={{ click: () => handleClickNavigation(point.targetIndex) }}
            animation__mouseenter="property: scale; to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 300"
            animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 300"
          >
            <Entity
              text={{ value: point.label, align: 'center', color: '#FFF' }}
              position="0 0 0.01"
              scale="2 2 2"
            />
          </Entity>
        ))}
      </Scene>
    </div>
  );
};
  
export default Photo360Viewer;
























// import React, { useRef } from 'react';
// import 'aframe';
// import { Entity, Scene } from 'aframe-react';

// const Photo360Viewer = ({ image, navPoints, handleNavigation }) => {
//   const cameraRef = useRef(null);

//   return (
//     <div className="viewer-container">
//       <div className="scene-container">
//         <Scene embedded>
//           <Entity primitive="a-sky" src={image} />
//           <Entity camera look-controls position="0 1.6 0" ref={cameraRef}>
//             <Entity cursor="fuse: false; rayOrigin: mouse" />
//           </Entity>
//           {navPoints.map((point, index) => (
//             <Entity
//               key={index}
//               geometry={{ primitive: 'circle', radius: 0.5 }}
//               material={{ color: 'red', opacity: 0.7 }}
//               position={`${point.x} ${point.y} ${point.z}`}
//               events={{ click: () => handleNavigation(point.targetIndex) }}
//               animation__mouseenter="property: scale; to: 1.2 1.2 1.2; startEvents: mouseenter; dur: 300"
//               animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 300"
//             >
//               <Entity
//                 text={{ value: point.label, align: 'center', color: '#FFF' }}
//                 position="0 0 0.01"
//                 scale="2 2 2"
//               />
//             </Entity>
//           ))}
//         </Scene>
//       </div>
//     </div>
//   );
// };

// export default Photo360Viewer;










