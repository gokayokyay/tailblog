<script>
  import marked from 'marked';
  import { post } from './';
  let postContent;
  post.subscribe(val => { postContent = marked(val) });
</script>

{@html postContent}