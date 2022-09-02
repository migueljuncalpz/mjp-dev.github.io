
<script>
export default{
  name: 'HeaderVue',
  data:()=>({
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
    <div class="header" :class="{ 'header header-bg': !view.topOfPage}">
        <div class='typing-demo'>MJP{ }Dev</div>
    </div>
</template>

<style lang="scss">
.header{
    height: 4%;
    display: grid;
    place-items: center;
    padding: 1rem 1rem;
    .typing-demo {
        text-align: center;
        width: 9ch;
        animation: typing 1.5s steps(9), blink .7s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 3rem;

        @keyframes typing {
          from {
            width: 0
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent
          }
        }
    }
}
.header-bg{
  animation: changeBackground 3s linear ;
  background-color: rgba(255,255,255,1);
  color:rgba(255,255,255,1);
}
@keyframes changeBackground{
  from{
    background-color: inherit;
  }
}
</style>
