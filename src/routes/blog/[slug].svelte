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
    return {
      post: {
        title: 'This is title',
        author: 'Gökay Okyay',
        createdAt: Date.now(),
        category: 'API Development Tips & Tricks',
        content: `
### Hey this is mock
mock mock mock
				`,
      },
    };
  }
</script>

<script>
  import marked from 'marked';
  export let post = {};
</script>

<style>
  .author > img {
    max-width: 75%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<div class="post-page-root">
  <div class="author absolute w-40 lg:w-32 h-28 top-0 mt-8 left-0 right-0 m-auto">
    <img class="m-auto border-4 border-gray-100 rounded-full cover" src="https://i.pravatar.cc/300" alt="avatar" />
    <p class="font-bold text-center">{post.author}</p>
  </div>
  <div class="post-page-main">
    <div class="post-page-head mb-8">
      <div class="post-page-metadata">
        <p class="mb-2 text-xs text-right text-gray-500 italic">Created at {new Date(post.createdAt).toUTCString()}</p>
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
