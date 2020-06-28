<script>
  import Header from './components/Common/Header.svelte';
  import Feed from './components/Home/Feed.svelte';
  import Hero from './components/Home/Hero.svelte';
	// export let name;
</script>

<div class="flex flex-col-reverse md:flex-row w-screen">
  <div class="w-full md:sidebar bg-gray-600" />
  <main class="overflow-auto h-screen flex-4 md:main" >
    <Header />
    <Feed />
  </main>
</div>
<!-- <Hero /> -->
