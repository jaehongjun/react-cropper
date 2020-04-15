import React, { useEffect, useState, useRef } from "react";
import cropperjs from "cropperjs";
import banmi from "./corona.jpeg";
import styled from "styled-components";

const IMG = styled.img`
  img {
    display: block;

    /* This rule is very important, please don't ignore this */
    max-width: 100%;
  }
`;

const Cropper = () => {
  const [cropperState, setCropperState] = useState(false);
  const imageRef = useRef();
  useEffect(() => {
    if (imageRef) {
      const cropper = new cropperjs(imageRef.current, {
        cropBoxMovable: false,
        cropBoxResizable: false,
        center: true,
        dragMode: "move",
        toggleDragModeOnDblclick: false,
        // autoCrop: false,
        ready(event) {
          console.log("event");
        },
        data: {
          left: 11,
          top: 10,
          width: 100,
          height: 100,
        },
        // autoCropArea: 0.8,
      });

      //   cropper.setCropBoxData
      // cropper.getCroppedCanvas();

      // cropper.cropBoxMovable;
      // cropper.getCroppedCanvas({
      //   width: 160,
      //   height: 90,
      //   minWidth: 256,
      //   minHeight: 256,
      //   maxWidth: 4096,
      //   maxHeight: 4096,
      //   fillColor: "#fff",
      //   imageSmoothingEnabled: false,
      //   imageSmoothingQuality: "high",
      // });

      //   cropper.crop();

      //   console.log(cropper);

      //   cropper.get

      setCropperState(cropper);
    }
  }, [imageRef]);

  return (
    <>
      <div>
        <IMG id="image" src={banmi} alt={"empty"} ref={imageRef}></IMG>
      </div>
      <button
        onClick={() => {
          console.log(cropperState);
          cropperState.getCroppedCanvas().toBlob((blob) => {
            const formData = new FormData();
            console.log(blob);

            // Pass the image file name as the third parameter if necessary.
            formData.append("croppedImage", blob /*, 'example.png' */);

            // Use `jQuery.ajax` method for example
            // $.ajax("/path/to/upload", {
            //   method: "POST",
            //   data: formData,
            //   processData: false,
            //   contentType: false,
            //   success() {
            //     console.log("Upload success");
            //   },
            //   error() {
            //     console.log("Upload error");
            //   },
            // });
          });
        }}
      >
        get Cropped Canvas
      </button>
    </>
  );
};

export default Cropper;
