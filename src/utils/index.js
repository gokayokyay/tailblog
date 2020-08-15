import { stores } from '@sapper/app';
import { get } from 'svelte/store';

export const getURL = () => {
  const { page } = stores();
  const { host, path } = get(page);
  const url = host && path && `https://${host}${path}`;
  if (url) {
    return url;
  } else if (window) {
    return window.location.href;
  }
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
