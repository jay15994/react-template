import { base64 } from './validators';

export const noop = () => {};

export const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));


export const camelize = (str) => str.replace(/_/g, ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
  if (/\s+/.test(match)) return ' ';
  return index !== 0 ? match.toLowerCase() : match.toUpperCase();
});

export const Ellipsis = (string, noOfCharacters) => {
  if (string && string.length > 0) {
    const clampedLines = `${string.substring(0, noOfCharacters)}${string.substring(noOfCharacters).length > 0 ? '...' : ''}`;
    return clampedLines;
  }
  return '';
};

export const arrayGenerator = (min, max) => Array(max - (min - 1))
  .fill().map((_, index) => (index + min));

export const isBase64 = (str) => {
  if (str === '' || str.trim() === '') return false;
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
};

export const getBase64 = (file) => (
  new Promise((resolve, reject) => {
    if (typeof file === 'string') {
      if (base64.test(file)) {
        resolve({ target: { result: file } });
      } else {
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = file;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/png');
          resolve({ target: { result: dataURL } });
        };
        img.onerror = reject;
      }
    } else if (file instanceof File || file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = resolve;
      reader.onerror = reject;
    }
  })
);

export const removeObjectElement = (data, remove) => {
  const _data = JSON.parse(JSON.stringify(data));
  if (typeof remove === 'object') {
    remove.forEach((type) => {
      delete _data[type];
    });
  }
  if (typeof remove === 'string') {
    delete _data[remove];
  }
  return _data;
};

let timerId;
export const debounce = (fn, delay) => { // eslint-disable-line
  return ((...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  })();
};
