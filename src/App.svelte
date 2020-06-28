<script>
  import Header from './components/Common/Header.svelte';
  import Feed from './components/Home/Feed.svelte';
  import Hero from './components/Home/Hero.svelte';
	// export let name;
</script>

<div class="flex">
  <div class="w-full md:w-1/3 bg-gray-600 h-full" />
  <main>
    <Header />
    <Feed />
  </main>
</div>
<Hero />