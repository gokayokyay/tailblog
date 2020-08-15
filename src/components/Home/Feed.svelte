<script>
  import PostCard from '../Common/PostCard.svelte';
  import { goto } from '@sapper/app';
</script>

<div class="flex flex-wrap p-4 w-full">
  <PostCard />
  <PostCard />
  <PostCard
    on:click={async () => {
      await goto('/posts/1');
    }} />
</div>
