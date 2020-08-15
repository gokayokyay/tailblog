<script>
  import { createPopper } from '@popperjs/core/lib/popper-lite.js';
  import { onMount } from 'svelte';
  import { PostHero } from '../../stores';
  import LinkedInShare from '../Common/LinkedIn.Share.svelte';
  import TwitterShare from '../Common/Twitter.Share.svelte';
  import FacebookShare from '../Common/Facebook.Share.svelte';
  let content, popover, popoverBtn;
  onMount(() => {
    createPopper(popoverBtn, popover, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
      ],
    });
  });
  PostHero.subscribe((c) => {
    content = c;
    console.log(c);
  });
</script>

<style>
  .hero {
    -webkit-box-shadow: inset -10px 0px 50px -20px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset -10px 0px 50px -20px rgba(0, 0, 0, 0.6);
    box-shadow: inset -10px 0px 50px -20px rgba(0, 0, 0, 0.6);
  }
  .cover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .separator {
    margin-top: 0.6rem;
  }
  :global(#tooltip) {
    display: none;
  }

  :global(#tooltip[data-show]) {
    display: block;
  }
</style>

<div
  class="w-full md:sidebar hero p-8 hidden md:flex items-center justify-center"
  style="background: url({content.backgroundImageURL});">
  <div class="w-full bg-gray-100 rounded-lg overflow-hidden border-bottom-black shadow-md min-h-12 flex flex-col">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="cover lg:h-48 md:h-36 w-full object-cover object-center" src={content.imageURL} />
    <div class="p-6">
      <p class="text-center title-font text-lg font-bold text-gray-900 mb-1">{content.title}</p>
      <p class="text-center tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{content.category}</p>
      <p class="leading-relaxed mt-2">{content.description}</p>
    </div>
    <div class="p-4 flex">
      <button
        bind:this={popoverBtn}
        on:click={() => {
          popover.attributes.hasOwnProperty('data-show') ? popover.removeAttribute('data-show') : popover.setAttribute('data-show', '');
        }}>
        <div class="h-6 w-6">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve">
            <path
              style="fill:#4A5A67;"
              d="M0,256.006C0,397.402,114.606,512.004,255.996,512C397.394,512.004,512,397.402,512,256.006
              C512.009,114.61,397.394,0,255.996,0C114.606,0,0,114.614,0,256.006z" />
            <path
              style="fill:#444A54;"
              d="M509.065,294.886L304.099,89.921c-0.771-0.772-1.694-1.389-2.717-1.817
              c-1.019-0.426-2.119-0.655-3.245-0.655H163.297c-4.654,0-8.428,3.774-8.428,8.427v25.282h-25.282c-4.654,0-8.427,3.774-8.427,8.428
              v286.536c0,2.759,1.414,5.093,3.465,6.63c0.482,0.642,82.769,82.93,83.411,83.411c0.452,0.603,0.973,1.105,1.565,1.565
              c15.055,2.756,30.544,4.272,46.395,4.271C384.176,512.003,490.335,417.827,509.065,294.886z" />
            <path
              style="fill:#F4F6F9;"
              d="M390.185,176.908c-0.428-1.023-1.044-1.946-1.817-2.717l-84.27-84.27
              c-0.771-0.772-1.694-1.389-2.717-1.817c-1.019-0.426-2.119-0.655-3.245-0.655H163.297c-4.654,0-8.428,3.774-8.428,8.428v25.282
              h-25.282c-4.654,0-8.428,3.774-8.428,8.428v286.535c0,4.654,3.774,8.428,8.428,8.428h219.116c4.654,0,8.428-3.774,8.428-8.428
              v-25.282h25.282c4.654,0,8.428-3.774,8.428-8.428v-202.26C390.841,179.027,390.611,177.926,390.185,176.908z
              M306.565,116.222 l55.503,55.503h-55.503V116.222z
              M340.275,407.695h-202.26v-269.68h16.855v244.398c0,4.654,3.774,8.428,8.428,8.428h176.978v16.854 H340.275z
              M171.725,373.985v-269.68H289.71v75.847c0,4.654,3.774,8.428,8.428,8.428h75.847v185.405L171.725,373.985L171.725,373.985
              z" />
          </svg>
        </div>
      </button>
      <div class="flex-1">
        <div class="h-1 flex-1 separator bg-gray-400 rounded" />
      </div>
      <FacebookShare />
      <div class="flex-1">
        <div class="h-1 flex-1 separator bg-gray-400 rounded" />
      </div>
      <TwitterShare />
      <div class="flex-1">
        <div class="h-1 flex-1 separator bg-gray-400 rounded" />
      </div>
      <LinkedInShare />
    </div>
    <div id="tooltip" bind:this={popover} class="px-4 py-2 rounded bg-gray-800 text-white">Yello</div>
  </div>
</div>
