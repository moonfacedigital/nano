<script>
  import './styles/_main.css'
  const name = 'Nano' // edit world and save to see hmr update
</script>

<nav>
  <a class="w-10 h-10" href="/"><img src="/mf-ico.svg" alt="" /></a>
  <ul class="flex flex-row gap-8 items-center">
    <li>
      <a class="nav_link" href="/">Home</a>
    </li>
    <li>
      <a class="nav_link" href="/posts/firstPost">Get Started</a>
    </li>
    <li>
      <a href="https://github.com/moonfacedigital/atmos">
        <img
          class="w-7 h-7"
          src="/static/resources/github-logo.svg"
          alt="Github Logo"
        />
      </a>
    </li>
  </ul>
</nav>
<main>
  <div class="centered_cont">
    <header>
      <h1>This is {name}</h1>
      <h2>A svelte template for small yet performant apps.</h2>
    </header>
    <div class="mt-6">
      <h3>Getting started</h3>
      <pre>pnpm run start</pre>
    </div>
  </div>
</main>

<style>
</style>
