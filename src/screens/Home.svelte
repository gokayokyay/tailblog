<script>
  import Header from '../components/Common/Header.svelte';
  import Footer from '../components/Common/Footer.svelte';
  import Feed from '../components/Home/Feed.svelte';
  import Hero from '../components/Home/Hero.svelte';
	// export let name;
</script>

<div class="flex flex-col md:flex-row w-screen">
  <div class="w-full md:sidebar bg-gray-600" />
  <main class="overflow-auto h-screen md:main">
    <Header />
    <Feed />
    <Footer />
  </main>
</div>
<!-- <Hero /> -->