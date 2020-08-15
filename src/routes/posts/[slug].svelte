<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // const res = await this.fetch(`blog/${params.slug}.json`);
    // const data = await res.json();
    // if (res.status === 200) {
    //   return { post: data };
    // } else {
    //   this.error(res.status, data.message);
    // }
    const post = {
      title: 'This is title',
      description: 'This is description',
      imageURL: 'https://dummyimage.com/720x400',
      backgroundImageURL: 'https://image.freepik.com/free-photo/stone-texture_1194-5537.jpg',
      author: 'Gökay Okyay',
      createdAt: Date.now(),
      category: 'API Development Tips & Tricks',
      content: `
### Hey this is mock
mock mock mock
				`,
    };
    return {
      post,
    };
  }
</script>

<script>
  import marked from 'marked';
  import { PostHero } from '../../stores';
  import { getURL } from '../../utils';
  import { onMount } from 'svelte';
  export let post = {};
  PostHero.set(post);
</script>

<style>
  .author > img {
    max-width: 75%;
  }
  .custom-shape-divider-top-1597077420 {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1597077420 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
  }

  .custom-shape-divider-top-1597077420 .shape-fill {
    fill: #ffffff;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.description || ''} />
  <meta property="og:title" content={post.title || ''} />
  <meta property="og:url" content={getURL()} />
  <meta property="og:description" content={post.description || ''} />
  <meta property="og:image" content={post.imageURL || ''} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_GB" />
</svelte:head>

<div class="relative">
  <div class="custom-shape-divider-top-1597077420 z-10">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        class="shape-fill" />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        class="shape-fill" />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        class="shape-fill" />
    </svg>
  </div>

  <div class="post-page-root">
    <div class="author absolute w-40 lg:w-32 h-28 top-0 mt-8 left-0 right-0 m-auto">
      <img class="m-auto border-4 border-gray-100 rounded-full cover" src="https://i.pravatar.cc/300" alt="avatar" />
      <p class="font-bold text-center">{post.author}</p>
    </div>
    <div class="post-page-main">
      <div class="post-page-head mb-8">
        <div class="post-page-metadata">
          <p class="mb-2 text-xs text-right text-gray-500 italic">
            Created at {new Date(post.createdAt).toUTCString()}
          </p>
        </div>
        <h1 class="text-center">{post.title}</h1>
        <div class="text-center">
          <p class="text-gray-500 tracking-widest text-sm">{post.category}</p>
        </div>
      </div>
      {@html marked(post.content || '')}
    </div>
    <div class="post-footer flex mt-4">
      <div class="flex-1 pr-8">
        <div class="bg-gray-100 rounded-md px-8 py-4">
          <span class="text-sm font-bold">Previous Post</span>
        </div>
      </div>
      <div class="flex-1 pl-8">
        <div class="bg-gray-100 rounded-md px-8 py-4 text-right">
          <span class="text-sm font-bold">Next Post</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-gray-900 p-4">
  <div class="rounded-md bg-white p-2" id="disqus_thread" />
</div>
<noscript>
  Please enable JavaScript to view the
  <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
</noscript>
