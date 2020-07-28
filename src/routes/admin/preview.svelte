<script>
  import marked from 'marked';
  import { post as postStore } from './';
  let post = { content: '' };
  postStore.subscribe(val => {
    console.log(val);
    post = { ...val, content: marked(val.content) };
  });
</script>

<style>
  .author > img {
    max-width: 75%;
  }
</style>

<div class="post-page-root">
  <div class="author absolute w-40 lg:w-32 h-28 top-0 mt-8 left-0 right-0 m-auto">
    <img class="m-auto border-4 border-gray-100 rounded-full cover" src="https://i.pravatar.cc/300" alt="avatar" />
    <p class="font-bold text-center">John Smith</p>
  </div>
  <div class="post-page-main">
    <div class="post-page-head mb-8">
      <div class="post-page-metadata">
        <p class="mb-2 text-xs text-right text-gray-500 italic">Created at 23 July 2020</p>
      </div>
      <h1 class="text-center">
        <!-- {post.title} -->
        This is Title
      </h1>
      <div class="text-center">
        <p class="text-gray-500 tracking-widest text-sm">
          API Development & Tricks
        </p>
      </div>
    </div>
    This is content
    <!-- {@html post.content} -->
  </div>
  <div class="post-page-recommends-container">
    
  </div>
</div>