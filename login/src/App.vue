<script >
import NavBar from '@/components/NavBar.vue'
import FooterNav from '@/components/FooterNav.vue'

export default {
  components: { NavBar, FooterNav }
}
</script>
  
<template>

  <body class="flex flex-col min-h-screen">
    <nav>
      <NavBar />
    </nav>
    <main>
      <router-view />
    </main>
    <footer class="mt-auto">
      <FooterNav />
    </footer>
  </body>
</template>