import "@google/model-viewer";

const Model = ({ ThreeDToggle, ModelAnim }) => (
   <model-viewer
      src={ModelAnim ? '/models/me-new-anim.glb' : '/models/me-new-static.glb'}
      className="model-viewer"
      ios-src=""
      alt="Rasul Akhundov 3D"
      shadow-intensity="2"
      camera-controls
      disable-zoom
      ar
      autoplay
      style={{
         width: '100%',
         height: '100%',
         opacity: !ThreeDToggle ? 0 : 1,
         transition: 'opacity 1000ms ease-in-out'
      }}
   >
   </model-viewer>
);

export default Model;