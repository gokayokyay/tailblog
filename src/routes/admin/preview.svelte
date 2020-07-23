<script>
  import marked from 'marked';
  import { post } from './';
  let postContent = '';
  post.subscribe(val => {
    console.log(val);
    postContent = marked(val.content);
  });
</script>

{@html postContent}