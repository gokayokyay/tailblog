import { writable } from 'svelte/store';

export const post = writable({
  title: '',
  category: '',
  content: '',
  author: '',
  authorPic: '',
  createdAt: Date.now(),
});
