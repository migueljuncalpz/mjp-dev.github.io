<template>
  <HeaderVue></HeaderVue>
  <Navbar></Navbar>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeInLeft" name="fade" mode="in-out">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
  import Navbar from '@/components/NavbarItem';
  import HeaderVue from '@/components/HeaderItem'
  import FooterVue from './components/FooterItem';
  import ContainerVue   from '@/components/ContainerItem'


  export default{
    data:()=>({}),
    components:{
      Navbar,
      HeaderVue,
      FooterVue,
      ContainerVue,
    }
  }
</script>


<style lang="scss">
html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url("../public/bg/bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

#app{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh; 
  background-color: rgba(255, 255, 255, 0.8);
}

.container{
  margin: 2rem 2rem;
}

</style>
