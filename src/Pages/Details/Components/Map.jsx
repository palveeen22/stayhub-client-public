import React from "react";

const Map = ({ img2 }) => {
  return (
    <div className="marginYShorter3 flex flex-col gap-2">
      <h3 className="text-xl">Location</h3>
      <div>
        <img src={img2} className="h-96 w-full object-cover rounded-lg" />
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.830195348732!2d106.6502752!3d-6.3021041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb119eda517f%3A0x641b37f9ea18f8a2!2sHacktiv8%20BSD%20Campus!5e0!3m2!1sen!2sid!4v1701763028373!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
      </div>
    </div>
  );
};

export default Map;
