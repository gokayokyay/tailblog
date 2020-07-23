<script>
  import marked from 'marked';
  let html = marked(`
  ---
<center>Centered text</center>

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements
  `);
</script>
<div class="post-page">
  <div class="post-page-content">
    <h1 class="text-center">
      Title
    </h1>
    Content
  </div>
</div>