<script>
  import { stores } from '@sapper/app';
  import { HeroMap } from './utils';
  import HeroSubscribe from './Hero.Subscribe.svelte';
  import Default from './Hero.default.svelte';
  const { preloading, page, session } = stores();
  let pageVal;
  let component = Default;
  page.subscribe(async (val) => {
    pageVal = val;
    component = await HeroMap(val);
  });
</script>

<svelte:component this={component} />
