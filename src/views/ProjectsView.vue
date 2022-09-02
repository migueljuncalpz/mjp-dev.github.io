<script>
import GalleryVue from "@/components/ContainerItem.vue" 
import { getProjects } from "@/services/ProjectsService"
export default{
  name:'ProjectView',
  data() {
    return{
      cards:[ ]
    }
  },
  methods:{
    async getProjects(){
      const res = await getProjects();
      this.cards=res.data;
    }
  },
  provide(){
    return{
      heading:"Mis trabajos",
      description:"mis trabajos",
      component:"CardVue",
      getCards:()=>this.cards
    }
  },
  mounted(){
    console.log('Mounted')
    this.getProjects()
  },
  components:{
    GalleryVue
  }
}
</script>

<template>
  <GalleryVue></GalleryVue>
</template>