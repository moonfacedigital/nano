<script>
  import HomePage from './Home.svelte'
  import SecondPage from './SecondPage.svelte'

  import InlineSVG from 'svelte-inline-svg'

  let tabs = [
    { name: 'Home', component: HomePage },
    { name: 'Second Page', component: SecondPage },
  ]

  // $: console.dir(selectedTab)

  // Have to use obj as arg. so value can be a class
  const initTab = (obj) => (selectedTab = obj)

  // let currentTab = sessionStorage.getItem('activeTab')

  function tabHistory(e) {
    let t = e.target
    let activeTab = t.getAttribute('title')
    console.log(activeTab)
    activeTabString = JSON.stringify(activeTab)
  }

  let selectedTab = tabs[0]
  // let getToken = sessionStorage.getItem('activeTab')
  // if (getToken) {
  //   selectedTab = activeTabString
  // }

  $: githubLogoAttrs = {
    class: 'text-inherit w-7 h-7',
    alt: 'Github Logo',
  }

  $: mfIcoAttrs = {
    class: 'text-inherit w-full',
    alt: 'Github Logo',
  }
</script>

<div class="nano_wrapper">
  <div class="nano_app">
    <div class="nano_cont">
      <nav class="text-mf-slate-900">
        <button
          class="w-10 h-10"
          title={tabs[0].name}
          component={tabs[0].component}
          on:click={() => initTab(tabs[0])}
          on:click={tabHistory}
        >
          <InlineSVG src={'/mf-ico.svg'} {...mfIcoAttrs} />
        </button>
        <ul class="flex flex-row gap-8 items-center">
          {#each tabs as tab}
            <button
              class="tablink"
              title={tab.name}
              component={tab.component}
              on:click={() => initTab(tab)}
              on:click={tabHistory}>{tab.name}</button
            >
          {/each}
          <li>
            <a href="https://github.com/moonfacedigital/nano">
              <InlineSVG src={'/github-logo.svg'} {...githubLogoAttrs} />
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <svelte:component this={selectedTab.component} />
      </main>
    </div>
  </div>
</div>

<style lang="postcss">
  @import '../src/styles/components.css';

  @import '../src/styles/utils.css';

  @import '../src/styles/_shame.css';

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
