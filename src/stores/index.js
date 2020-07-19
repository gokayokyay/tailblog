import { writable } from 'svelte/store';

export const PostHero = writable({
  imageURL: 'https://dummyimage.com/720x400',
  title: 'Post Title',
  category: 'Post Category',
  backgroundImageURL: 'https://image.freepik.com/free-photo/stone-texture_1194-5537.jpg',
  description: 'Just a small description...'
});