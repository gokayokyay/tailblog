<script>
  import Hero from '../components/Hero/Hero.svelte';
  import Header from '../components/Common/Header.svelte';
  import Footer from '../components/Common/Footer.svelte';
</script>

<div class="flex flex-col md:flex-row w-screen">
  <Hero />
  <main class="overflow-auto h-screen md:main">
    <Header />
    <slot></slot>
    <Footer />
  </main>
</div>