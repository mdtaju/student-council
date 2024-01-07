// imageUtils.js

/**
 * Get the cropped image from the original image using the cropping data.
 * @param {File} image - The original image file.
 * @param {Object} crop - The cropping data (e.g., { x, y, width, height }).
 * @returns {Promise<Blob>} - A Promise that resolves with the cropped image as a Blob.
 */
const getCroppedImg = (image, crop) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(image);
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scaleX = img.naturalWidth / img.width;
        const scaleY = img.naturalHeight / img.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
  
        ctx.drawImage(
          img,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
  
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Failed to create a blob for the cropped image'));
            return;
          }
          resolve(blob);
        }, 'image/jpeg');
      };
  
      img.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  export default getCroppedImg;
  