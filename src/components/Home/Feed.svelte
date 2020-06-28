<script>
  import PostCard from '../Common/PostCard.svelte';
</script>
<div class="flex flex-wrap p-4 w-full">
  <PostCard />
  <PostCard />
  <PostCard on:click={e => alert(e)}/>
</div>