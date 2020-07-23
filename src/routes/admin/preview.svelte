<script>
  import marked from 'marked';
  import { post as postStore } from './';
  let post = { content: '' };
  postStore.subscribe(val => {
    console.log(val);
    post = { ...val, content: marked(val.content) };
  });
</script>
<div class="post-page-root">
  <div class="absolute bg-red-500 w-12 h-12 top-0 left-0 right-0 m-auto">

  </div>
  <div class="post-page-main">
    <div class="post-page-head">
      <div class="post-page-metadata">
        <p class="text-xs text-right text-gray-500 italic">Created at 23 July 2020</p>
      </div>
      <h1 class="text-center">
        <!-- {post.title} -->
        This is Title
      </h1>
      <div class="text-center">
        <span class="text-gray-500 text-sm">
          Category: API
        </span>
      </div>
    </div>
    This is content
    <!-- {@html post.content} -->
  </div>
</div>