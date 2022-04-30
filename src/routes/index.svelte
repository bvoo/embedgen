<script lang="ts">
    let copyIcon = 'fal fa-copy';
    
    let authorText, titleText, descriptionText, sidebarColor, imageUrl, redirectUrl, url = "";
    
    async function handleLoad() {
        let urlParams = new URLSearchParams(window.location.search);
        
        authorText = urlParams.get('author');
        titleText = urlParams.get('title');
        descriptionText = urlParams.get('description');
        sidebarColor = urlParams.get('sidebarColor');
        imageUrl = urlParams.get('imageUrl');
        redirectUrl = urlParams.get('redirectUrl');
    }
    
    let waiting = 0
    
    const onload = el => {
        waiting++
        el.addEventListener('load', () => {
            waiting--
            if (waiting === 0) {
                handleLoad()
            }
        })
    }
    
    async function generate() {
        console.log('swag');
        let embed_url = "https://{titleText}/";

        if (authorText != "") {
            embed_url += "?author=" + authorText;
        }
        if (titleText != "") {
            embed_url += "&title=" + titleText;
        }
        if (descriptionText != "") {
            embed_url += "&description=" + descriptionText;
        }
        if (sidebarColor != "") {
            embed_url += "&sidebarColor=" + sidebarColor;
        }
        if (imageUrl != "") {
            embed_url += "&imageUrl=" + imageUrl;
        }
        if (redirectUrl != "") {
            embed_url += "&redirectUrl=" + redirectUrl;
        }

        navigator.clipboard.writeText(embed_url);
        copyIcon = 'fal fa-copy';

        url = embed_url;
    }

    async function copy(resultString: string) {
        navigator.clipboard.writeText(resultString);
        copyIcon = 'fal fa-check';
    }


</script>

<svelte:head>
    <title>{titleText}</title>
    <meta content='en_US' name='locale' />
    <meta content='{sidebarColor}' name='theme-color' />
    <meta content='{descriptionText}' name='description' />
    <meta content='{descriptionText}' property='og:description' />
    <meta content='{descriptionText}' name='twitter:description' />
  
    <meta content='{titleText}' property='og:title' />
    <meta content='{titleText}' name='twitter:title' />
    <meta content='{titleText}' property='og:site_name' />
    <meta content='{imageUrl}' name='og:image' />
  
    <meta content='website' property='og:type' />
    <meta content='{redirectUrl}' property='og:url' />
    <meta content='{imageUrl}' name='twitter:image' />
    <meta content='{imageUrl}' name='twitter:card' />
    <meta content='{authorText}' name='twitter:creator' />
    <meta content='{authorText}' name='twitter:site' />
</svelte:head>

<div class="h-[4em]" />
<div class="flex flex-row nowrap justify-center align-middle text-center">
  <div class="flex flex-col justify-between w-1/2">
    <h1 class="font-serif font-bold tracking-wider pb-16 text-6xl sm:text-4xl md:text-5xl">Embed Generator</h1>
    <div class="h-2" />
    <div class="text-2xl flex flex-col space-y-6 sm:gap-0 w-full">
      <div class="w-32" />
      <input type="text" bind:value={ authorText } placeholder="Author" />
      <input type="text" bind:value={ titleText } placeholder="Title" />
      <input type="text" bind:value={ descriptionText } placeholder="Description" />
      <input type="text" bind:value={ sidebarColor } placeholder="Sidebar Color (#FFFFFF)" />
      <input type="text" bind:value={ imageUrl } placeholder="Image URL" />
      <input type="text" bind:value={ redirectUrl } placeholder="Redirect URL" />
      <span class="font-mono text-secondary">
        <button id="generate" on:click={() => generate()}> Generate </button>
      </span>
      <div class="flex flex-row">
        <input bind:value={url} type="text" class="cursor-not-allowed w-full font-sans" disabled />
        <span class="font-mono text-secondary text-4xl ">
            <button on:click={() => copy(url)} >
                <i id="copy" class={copyIcon} />
            </button>
        </span>
    </div>
      <div class="w-32" />
    </div>
    <div class="h-6" />
  </div>
</div>

<style>
  button {
    background-color: transparent;
  }
</style>
