export async function HeroMap(val) {
  let comp;
  switch (val.path.split('/')[1]) {
    case 'posts': {
      const { default: postComp } = await import('./Hero.Post.svelte');
      comp = postComp;
      break;
    }
    case '': {
      const { default: home } = await import('./Hero.Subscribe.svelte');
      comp = home;
      break;
    }
    default: {
      const { default: defaultComp } = await import('./Hero.default.svelte');
      comp = defaultComp;
      break;
    }
  }
  return comp;
}