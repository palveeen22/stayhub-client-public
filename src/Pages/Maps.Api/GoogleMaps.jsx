// import * as React from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const render = (status) => {
//   return <h1>{status}</h1>;
// };

// const App = () => {
//   const [clicks, setClicks] = React.useState([]);
//   const [zoom, setZoom] = React.useState(3); // initial zoom
//   const [center, setCenter] = React.useState({
//     lat: 0,
//     lng: 0,
//   });

//   const onClick = (e) => {
//     // avoid directly mutating state
//     setClicks([...clicks, e.latLng]);
//   };

//   const onIdle = (m) => {
//     console.log("onIdle");
//     setZoom(m.getZoom());
//     setCenter(m.getCenter().toJSON());
//   };

//   const form = (
//     <div
//       style={{
//         padding: "1rem",
//         flexBasis: "250px",
//         height: "100%",
//         overflow: "auto",
//       }}
//     >
//       <label htmlFor="zoom">Zoom</label>
//       <input
//         type="number"
//         id="zoom"
//         name="zoom"
//         value={zoom}
//         onChange={(event) => setZoom(Number(event.target.value))}
//       />
//       <br />
//       <label htmlFor="lat">Latitude</label>
//       <input
//         type="number"
//         id="lat"
//         name="lat"
//         value={center.lat}
//         onChange={(event) =>
//           setCenter({ ...center, lat: Number(event.target.value) })
//         }
//       />
//       <br />
//       <label htmlFor="lng">Longitude</label>
//       <input
//         type="number"
//         id="lng"
//         name="lng"
//         value={center.lng}
//         onChange={(event) =>
//           setCenter({ ...center, lng: Number(event.target.value) })
//         }
//       />
//       <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
//       {clicks.map((latLng, i) => (
//         <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
//       ))}
//       <button onClick={() => setClicks([])}>Clear</button>
//     </div>
//   );

//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//           {/* <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={render}> */}
//           <Wrapper apiKey={AIzaSyCaZhGHF3I6rVWSrhgULzkttXeQQpHp6v8} render={render}>
//         <Map
//           center={center}
//           onClick={onClick}
//           onIdle={onIdle}
//           zoom={zoom}
//           style={{ flexGrow: "1", height: "100%" }}
//         >
//           {clicks.map((latLng, i) => (
//             <Marker key={i} position={latLng} />
//           ))}
//         </Map>
//       </Wrapper>
//       {/* Basic form for controlling center and zoom of map. */}
//       {form}
//     </div>
//   );
// };
// const Map = ({ onClick, onIdle, children, style, ...options }) => {
//   const ref = React.useRef(null);
//   const [map, setMap] = React.useState();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   // because React does not do deep comparisons, a custom hook is used
//   // see discussion in https://github.com/googlemaps/js-samples/issues/946
//   useDeepCompareEffectForMaps(() => {
//     if (map) {
//       map.setOptions(options);
//     }
//   }, [map, options]);

//   React.useEffect(() => {
//     if (map) {
//       ["click", "idle"].forEach((eventName) =>
//         google.maps.event.clearListeners(map, eventName)
//       );

//       if (onClick) {
//         map.addListener("click", onClick);
//       }

//       if (onIdle) {
//         map.addListener("idle", () => onIdle(map));
//       }
//     }
//   }, [map, onClick, onIdle]);

//   return (
//     <>
//       <div ref={ref} style={style} />
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           // set the map prop on the child component
//           // @ts-ignore
//           return React.cloneElement(child, { map });
//         }
//       })}
//     </>
//   );
// };

// const Marker = (options) => {
//   const [marker, setMarker] = React.useState();

//   React.useEffect(() => {
//     if (!marker) {
//       setMarker(new google.maps.Marker());
//     }

//     // remove marker from map```javascript
// import React, { useEffect, useState } from "react";
// import { Wrapper, Map, Marker } from "@googlemaps/react-wrapper";

// const App = () => {
//   const [clicks, setClicks] = useState([]);
//   const [zoom, setZoom] = useState(3); // initial zoom
//   const [center, setCenter] = useState({
//     lat: 0,
//     lng: 0,
//   });

//   const onClick = (e) => {
//     // avoid directly mutating state
//     setClicks([...clicks, e.latLng]);
//   };

//   const onIdle = (m) => {
//     console.log("onIdle");
//     setZoom(m.getZoom());
//     setCenter(m.getCenter().toJSON());
//   };

//   const form = (
//     <div
//       style={{
//         padding: "1rem",
//         flexBasis: "250px",
//         height: "100%",
//         overflow: "auto",
//       }}
//     >
//       <label htmlFor="zoom">Zoom</label>
//       <input
//         type="number"
//         id="zoom"
//         name="zoom"
//         value={zoom}
//         onChange={(event) => setZoom(Number(event.target.value))}
//       />
//       <br />
//       <label htmlFor="lat">Latitude</label>
//       <input
//         type="number"
//         id="lat"
//         name="lat"
//         value={center.lat}
//         onChange={(event) =>
//           setCenter({ ...center, lat: Number(event.target.value) })
//         }
//       />
//       <br />
//       <label htmlFor="lng">Longitude</label>
//       <input
//         type="number"
//         id="lng"
//         name="lng"
//         value={center.lng}
//         onChange={(event) =>
//           setCenter({ ...center, lng: Number(event.target.value) })
//         }
//       />
//       <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
//       {clicks.map((latLng, i) => (
//         <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
//       ))}
//       <button onClick={() => setClicks([])}>Clear</button>
//     </div>
//   );

//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//       <Wrapper
//               // apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//               apiKey={AIzaSyCaZhGHF3I6rVWSrhgULzkttXeQQpHp6v8}

//         render={(status) => <h1>{status}</h1>}
//       >
//         <Map
//           center={center}
//           onClick={onClick}
//           onIdle={onIdle}
//           zoom={zoom}
//           style={{ flexGrow: "1", height: "100%" }}
//         >
//           {clicks.map((latLng, i) => (
//             <Marker key={i} position={latLng} />
//           ))}
//         </Map>
//       </Wrapper>
//       {/* Basic form for controlling center and zoom of map. */}
//       {form}
//     </div>
//   );
// };

// export default App;
