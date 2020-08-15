<script>
  function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle('hidden');
    document.getElementById(collapseID).classList.toggle('flex');
  }
</script>

<style>
  .logo {
    background-image: url('/logo.png');
  }
</style>

<nav
  class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white border-gray-800
  border-b-2">
  <div class="px-4 flex flex-wrap items-center justify-between w-full">
    <div class="w-full relative flex justify-between md:w-auto px-4 md:static md:block md:justify-start">
      <!-- svelte-ignore a11y-missing-content -->
      <a class="logo bg-contain bg-center bg-no-repeat w-40 h-12 inline-block" href="#pablo" />
      <button
        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded
        bg-transparent block md:hidden outline-none focus:outline-none"
        type="button"
        on:click={(e) => toggleNavbar('example-collapse-navbar')}>
        <i class="fas fa-bars" />
      </button>
    </div>
    <div class="md:flex flex-grow items-center hidden ml-auto" id="example-collapse-navbar">
      <ul class="flex flex-col md:flex-row list-none md:ml-auto">
        <li>
          <a class="nav-li hover:opacity-50" href="/posts">
            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" />
            <span class="ml-2">Posts</span>
          </a>
        </li>
        <li>
          <a class="nav-li hover:opacity-50" href="/about">
            <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
            <span class="ml-2">About</span>
          </a>
        </li>
        <li>
          <a class="nav-li hover:opacity-50" href="/contact">
            <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
            <span class="ml-2">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
