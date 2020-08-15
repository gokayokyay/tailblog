<script>
  import { toBase64 } from '../../utils';
  import { post } from './';
  import { PostHero } from '../../stores';
  import { get } from 'svelte/store';
  let fileUploadInput;
  let fileUploadDiv;
  let fileUploadURL;
  const onFileUploadContainerClick = () => {
    fileUploadInput.click();
  };
  const handleDrop = (e) => {
    const data = e.dataTransfer;
    const file = { data };
    handleFile(file);
  };
  const handleFile = async (file) => {
    const b64 = await toBase64(file);
    fileUploadDiv.style.background = `url("${b64}")`;
    const formData = new FormData();
    formData.append('image', b64.split(',')[1]);
    const response = await fetch('https://api.imgbb.com/1/upload?key=95a1c47046692660f17be9730c009065', {
      method: 'POST',
      body: formData,
    });
    const { data: result } = await response.json();
    PostHero.update((c) => ({ ...c, imageURL: result.display_url }));
  };
  const handleFileURL = () => {
    const url = fileUploadURL;
    PostHero.update((c) => ({ ...c, imageURL: url }));
  };
  const valueChange = (prop) => ({ target: { value } }) => {
    post.update((c) => ({ ...c, [prop]: value }));
    PostHero.update((c) => ({ ...c, [prop]: value }));
  };
</script>

<svelte:head>
  <title>Create a post</title>
</svelte:head>
<div class="p-4">
  <div>
    <label class="input-label text-base" for="hero-bg-image">Hero Background Image</label>
    <div class="my-2 flex border-bottom-black rounded">
      <input
        on:change={valueChange('backgroundImageURL')}
        class="text-input text-gray-700 bg-gray-100 focus:shadow-outline-black"
        id="hero-bg-image"
        placeholder="Paste image URL here..." />
    </div>
    <label class="input-label text-base" for="hero-bg-desc">Hero Description</label>
    <div class="my-2 flex border-bottom-black rounded">
      <input
        on:change={valueChange('description')}
        class="text-input text-gray-700 bg-gray-100 focus:shadow-outline-black"
        id="hero-bg-desc"
        placeholder="Just a small description." />
    </div>
    <input
      type="file"
      accept="image/*"
      multiple="false"
      class="hidden"
      bind:this={fileUploadInput}
      on:change={(e) => {
        handleFile(e.target.files[0]);
      }} />
    <label class="input-label text-base" for="cover-url">Post Cover</label>
    <div
      bind:this={fileUploadDiv}
      on:click={onFileUploadContainerClick}
      class="p-8 flex justify-center bg-gray-300 area border-bottom-black cursor-pointer">
      <span class="p-8 border-gray-600 text-gray-700 text-center border-dashed rounded border-4">
        Click here to upload image
      </span>
    </div>
    <div class="mt-4 flex border-bottom-black rounded">
      <input
        bind:value={fileUploadURL}
        class="text-input text-gray-700 bg-gray-100"
        id="cover-url"
        placeholder="Or paste image URL here..." />
      <button
        on:click={handleFileURL}
        class="button-basic rounded-tl-none rounded-b-none bg-black text-white active:bg-white active:text-black">
        OK
      </button>
    </div>
  </div>
  <div class="mt-2">
    <label class="input-label mt-4 text-base" for="title">Post Title</label>
    <input
      class="text-input border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black"
      id="title"
      on:change={valueChange('title')} />
    <label class="input-label mt-4 text-base" for="category">Post Category</label>
    <input
      class="text-input border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black"
      id="category"
      on:change={valueChange('category')} />

    <label class="input-label mt-4 text-base" for="content" id="content-label">Post Content</label>
    <textarea
      class="text-area h-64 border-bottom-black text-gray-700 bg-gray-100 focus:shadow-outline-black"
      id="content"
      on:change={(e) => {
        post.update((o) => ({ ...o, content: e.target.value }));
      }} />
  </div>

  <div class="mt-4 flex justify-end">
    <a href="/admin/preview" class="button-basic border-bottom-black mr-2 active:bg-black active:text-white">
      Preview Post
    </a>
    <button
      on:click={() => console.log(get(post))}
      class="button-basic border-bottom-black bg-black text-white active:bg-white active:text-black">
      Create Post
    </button>
  </div>
</div>
