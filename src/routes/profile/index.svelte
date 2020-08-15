<script>
  import { goto } from '@sapper/app';
</script>

<style>
  .overlay {
    transition: all 0.3s ease;
  }
  .profile-div .overlay {
    transform: translateY(-100%);
  }
  .profile-div:hover .overlay {
    transform: translateY(0%);
  }
</style>

<div class="absolute w-full h-full flex items-center justify-center flex-col bg-gray-200">
  <button
    class="absolute left-0 top-0 w-20 h-10 button-basic border-bottom-black ml-4 mt-4"
    on:click={async () => await goto('/')}>
    Home
  </button>
  <div class="font-bold text-3xl text-gray-800">Profile</div>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="bg-white rounded-lg shadow-lg border-gray-400 border">
      <div class="text-lg text-center mt-6">
        <label for="profilepic">Profile Picture</label>
      </div>
      <div
        class="relative profile-div rounded-full border border-gray-400 overflow-hidden flex justify-center w-40 h-40
        m-auto mt-4">
        <div
          class="overlay h-full w-full bg-gray-500 opacity-50 absolute left-0 top-0 flex justify-center items-center">
          Click to change
        </div>
        <img alt="profile" src="https://i.pravatar.cc/300" />
      </div>
      <div class="px-6 my-4">
        <input
          id="profilepic"
          value="https://i.pravatar.cc/300"
          class="text-input text-gray-700 bg-gray-100 focus:shadow-outline-black border-bottom-black" />
      </div>
      <div class="text-center mt-10 text-lg">
        <label for="fullname">Full Name</label>
      </div>
      <div class="px-6">
        <input
          id="fullname"
          class="text-input text-gray-700 bg-gray-100 focus:shadow-outline-black my-4 border-bottom-black" />
      </div>
      <div class="flex justify-center">
        <button class="button-basic border-bottom-black mb-6 bg-black text-white active:bg-white active:text-black">
          Save
        </button>
      </div>
    </div>
  </div>
</div>
