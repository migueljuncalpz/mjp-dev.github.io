<script>
import ContainerVue from "@/components/ContainerItem.vue"
export default{
  name: 'HomeView',
  data:()=>({}),
  provide(){
    return{
      heading:'Inicio',
      components:'Home'
    
    }
  },
  components:{
    ContainerVue
  }

}
</script>

<template>
<ContainerVue></ContainerVue>
</template>

<style lang="scss">

</style>