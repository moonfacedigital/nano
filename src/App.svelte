<script>
  import './styles/_main.css'
  import HomePage from './Home.svelte'
  import SecondPage from './SecondPage.svelte'

  const tabs = [
    { name: 'Home', component: HomePage },
    { name: 'Second Page', component: SecondPage },
  ]

  // $: console.dir(selectedTab)

  // Have to use obj as arg. so value can be a class
  const initTab = (obj) => (selectedTab = obj)
  function tabHistory(e) {
    let activeTab = e.target.name
    console.log(activeTab)
  }

  // Loads an object in webpages array
  let selectedTab = tabs[0]
</script>

<div class="nano_app">
  <nav>
    <button
      class="w-10 h-10"
      title={tabs[0].name}
      component={tabs[0].component}
      on:click={() => initTab(tabs[0])}
      on:click={tabHistory}><img src="/mf-ico.svg" alt="logo" /></button
    >
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
    <svelte:component this={selectedTab.component} />
  </main>
</div>
