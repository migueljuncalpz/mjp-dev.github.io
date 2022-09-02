<script>
export default {
  name: 'NavbarItem',
  data: () => ({
      view: {
        topOfPage: true
      }
  }),

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(){
      if(window.pageYOffset>50){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
}
</script>

<template>
<div class="navbar" :class="{ 'navbar navbar-bg': !view.topOfPage}">
    <button class="inicio" @click="$router.push('/')">INICIO</button>
    <button class="proyectos" @click="$router.push('/projects')" >TRABAJOS</button>
    <button class="contacto" @click="$router.push('/contact')">CONTACTO</button>
</div>
</template>


<style scoped lang="scss">
//NavBar
.navbar{
  top:0;
  display: grid;
  position: sticky;
  z-index: 999;
  height: 5;
  margin: 0 auto;  
  .inicio{
    margin: 0 auto;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  .proyectos{
    margin: 0 auto;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  .contacto{
    margin: 0 auto;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  button{
    padding: 1rem 1rem;
    background-color: transparent;
    border: none;
    border-radius: 1rem;
    width: fit-content;
    color:black;
  }
  button:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
}
.navbar-bg{
  animation: changeBackground 3s ease ;
  background-color: rgba(255,255,255,1);
}
@keyframes changeBackground{
  from{
    background-color: inherit;
  }
}


</style>
