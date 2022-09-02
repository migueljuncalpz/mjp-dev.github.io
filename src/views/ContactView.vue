<script>
import ContainerVue from "@/components/ContainerItem.vue"
export default{
  name:'ContactVue',
  data:()=>({}),
  components:{
    ContainerVue
  },
  provide(){
    return{
      component:'ContactVue',
      heading:'Contacto',
      description:'Introduzca sus datos a continuación'
    }
  }
}
</script>
<template>
  <ContainerVue>
  </ContainerVue>
</template>
