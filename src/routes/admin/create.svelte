<svelte:head>
  <title>Create a post</title>
</svelte:head>


<script>
  import { post } from './';
  let fileUploadInput;
  const onFileUploadContainerClick = () => {
    fileUploadInput.click();
  };
  const handleDrop = e => {
    const data = e.dataTransfer;
    const file = { data };
    handleFile(file);
  };
  const handleFile = file => {
    console.log(file);
  };
</script>

<div class="p-4">
  <div>
    <input type="file" accept="image/*" multiple="false" class="hidden" bind:this={fileUploadInput} on:change={e => { handleFile(e.target.files[0]); }}/>
    <label class="input-label text-base" for="cover-url">
      Post Cover
    </label>
    <div on:click={onFileUploadContainerClick} class="p-4 flex justify-center bg-gray-300 area border-bottom-black cursor-pointer">
      <span class="p-8 border-gray-600 text-gray-700 text-center border-dashed rounded border-4">
        Click here to upload image
      </span>
    </div>
    <div class="mt-4 flex border-bottom-black rounded">
      <input class="text-input text-gray-700 bg-gray-100" id="cover-url" placeholder="Or paste image URL here..." />
      <button class="button-basic rounded-tl-none rounded-b-none bg-black text-white active:bg-white active:text-black">Upload</button>
    </div>
  </div>
  <div class="mt-2">
    <label class="input-label mt-4 text-base" for="title">
      Post Title
    </label>
    <input class="text-input border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black" id="title" />
    <label class="input-label mt-4 text-base" for="category">
      Post Category
    </label>
    <input class="text-input border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black" id="category" />

    <label class="input-label mt-4 text-base" for="content" id="content-label">
      Post Content
    </label>
    <textarea class="text-area h-64 border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black" id="content" on:change={e => { post.set(e.target.value)}}/>
  </div>

  <div class="mt-4 flex justify-end">
    <a href="/admin/preview" class="button-basic border-bottom-black mr-2 active:bg-black active:text-white">
      Preview Post
    </a>
    <button class="button-basic border-bottom-black bg-black text-white active:bg-white active:text-black">
      Create Post
    </button>
  </div>
</div>
