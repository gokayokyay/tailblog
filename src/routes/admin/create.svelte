<svelte:head>
  <title>Create a post</title>
</svelte:head>


<script>

</script>

<div class="p-4">
  <div class="mt-2">
    <label class="input-label text-base" for="title">
      Post Title
    </label>
    <input class="text-input border-bottom-black text-gray-700 bg-gray-100" id="title" />

    <label class="input-label mt-4 text-base" for="content" id="content-label">
      Post Content
    </label>
    <textarea class="text-area h-64 border-bottom-black text-gray-700 bg-gray-100" id="content"/>
  </div>

  <div class="mt-4 flex justify-end">
    <button class="button-basic border-bottom-black mr-2 active:bg-black active:text-white">
      Preview Post
    </button>
    <button class="button-basic border-bottom-black bg-black text-white active:bg-white active:text-black">
      Create Post
    </button>
  </div>
</div>
