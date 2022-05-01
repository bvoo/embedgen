<script lang="ts">
    export let params; 

    console.log(params)

    let copyIcon = 'fal fa-copy';
    
    let authorText = "";
    let titleText = "";
    let descriptionText = "";
    let sidebarColor = "";
    let imageUrl = "";
    let redirectUrl = "";
    let url = "";
    
    async function generate() {
        let embed_url = "";

        if (authorText != "") {
            authorText = encodeURIComponent(authorText);
            embed_url += "?author=" + authorText;
        }
        if (titleText != "") {
            titleText = encodeURIComponent(titleText);
            embed_url += "&title=" + titleText;
        }
        if (descriptionText != "") {
            descriptionText = encodeURIComponent(descriptionText);
            embed_url += "&description=" + descriptionText;
        }
        if (sidebarColor != "") {
            sidebarColor = encodeURIComponent(sidebarColor);
            embed_url += "&sidebarColor=" + sidebarColor;
        }
        if (imageUrl != "") {
            imageUrl = encodeURIComponent(imageUrl);
            embed_url += "&imageUrl=" + imageUrl;
        }
        if (redirectUrl != "") {
            redirectUrl = encodeURIComponent(redirectUrl);
            embed_url += "&redirectUrl=" + redirectUrl;
        }

        embed_url = "https://embed.bvoo.xyz/" + embed_url;

        navigator.clipboard.writeText(embed_url);
        copyIcon = 'fal fa-copy';
        
        url = embed_url;
    }

    async function copy(resultString: string) {
        navigator.clipboard.writeText(resultString);
        copyIcon = 'fal fa-check';
    }

</script>

<script context="module">
export async function load({ url }) {
    let params = [];
    for (const [key, value] of url.searchParams) {
        params[key] = value;
    }

    return {
        props: {
            params: params
        }
    };
}
</script>

<svelte:head>
    <title>{params.title}</title>
    <meta content='en_US' name='locale' />
    <meta content='{params.sidebarColor}' name='theme-color' />
    <meta content='{params.description}' name='description' />
    <meta content='{params.description}' property='og:description' />
    <meta content='{params.description}' name='twitter:description' />

    <meta content='{params.title}' property='og:title' />
    <meta content='{params.title}' name='twitter:title' />
    <meta content='{params.title}' property='og:site_name' />
    <meta content='{params.imageUrl}' name='og:image' />

    <meta content='website' property='og:type' />
    <meta content='{params.redirectUrl}' property='og:url' />
    <meta content='{params.imageUrl}' name='twitter:image' />
    <meta content='{params.imageUrl}' name='twitter:card' />
    <meta content='{params.author}' name='twitter:creator' />
    <meta content='{params.author}' name='twitter:site' />
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
