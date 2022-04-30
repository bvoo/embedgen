<script>
  import '../styles/app.scss';
</script>

<svelte:head>
  <!-- <title>embed.bvoo.xyz</title>
  <meta content='en_US' name='locale' />
  <meta content='#2e2e2e' name='theme-color' />
  <meta content='base64 encode/decode' name='description' />
  <meta content='base64 encode/decode' property='og:description' />
  <meta content='base64 encode/decode' name='twitter:description' />

  <meta content='embed.bvoo.xyz' property='og:title' />
  <meta content='embed.bvoo.xyz' name='twitter:title' />
  <meta content='embed.bvoo.xyz' property='og:site_name' />
  <meta content='/large-content.png' name='og:image' />

  <meta content='website' property='og:type' />
  <meta content='https://embed.bvoo.xyz/' property='og:url' />
  <meta content='/large-content.png' property='og:image' />
  <meta content='/favicon.png' name='twitter:image' />
  <meta content='summary_large_image' name='twitter:card' />
  <meta content='@bvoowo' name='twitter:creator' />
  <meta content='@bvoowo' name='twitter:site' /> -->

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159323134-2"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag('js', new Date());
  gtag('config', 'UA-159323134-2');
  </script>

  <!-- Google Ads  -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5879376732987660" crossorigin="anonymous"></script>
</svelte:head>

<div class='flex flex-col p-4'>
  <slot />
</div>
