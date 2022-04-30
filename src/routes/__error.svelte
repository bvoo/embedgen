<script context='module' lang='ts'>
  import type { ErrorLoadInput } from '@sveltejs/kit';

  export function load({ error, status }: ErrorLoadInput) {
    return {
      props: {
        error,
        status
      }
    };
  }
</script>

<script>
  export let error;
  export let status;

  let show = false;
</script>

<div class='h-[150px]' />
<div class='flex flex-col nowrap justify-center align-middle text-center'>
  <h1 class='font-mono text-9xl'>{status}</h1>
  <div class='h-[15px]' />
  <span class="font-mono text-secondary text-2xl mt-4">You shouldn't be here.</span>
  <div class='h-[50px]' />
    <div class='flex flex-col items-center'>
        <a href='/' class='font-mono text-2xl text-secondary'>
        <span>←</span>
        <span>Go Home</span>
        </a>
    </div>
  <div class='h-[50px]' />
  <button on:click={() => (show = !show)}>Details</button>
  <div class='h-[50px]' />
  {#if show}
    <pre class='break-words max-w-[600px] mx-auto whitespace-pre-line'>{error.message}</pre>
  {/if}
</div>

<style>

button {
    background: none;
}
</style>