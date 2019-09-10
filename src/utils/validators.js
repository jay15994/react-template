export const numeric = /^[0-9]+$/;
export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const specialCharactersRegex = /^[0-9a-zA-Z& _-]{1,30}$/;
export const phone = /^\(?([+])?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export const clientUserPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g; // eslint-disable-line
export const website = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
export const base64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
export const hexColor = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

export const required = (value) => !value;

export const isEqual = (value, compareValue) => (value === compareValue);


export const matchRegEx = (value, pattern) => (value && pattern && value.match(pattern));

export const minValue = (value, min) => (
  value && value.length < min ? `Must be at least ${min}` : undefined
);

export const maxLength = (value, max) => (
  value && value.length > max ? true : undefined
);

export const hasChildren = (value) => (value && value.length > 0 ? undefined : 'Required');

export const compare = (expectedSmaller, expectedGreater) => (expectedSmaller <= expectedGreater);
