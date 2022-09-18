
<script>
export default{
  name: 'HeaderVue',
  data:()=>({
  }),
}
</script>

<template>
    <div class='typing-demo'>MJP{}Dev</div>
</template>

<style scoped lang="scss">
.typing-demo {
    text-align: center;
    width: 9ch;
    animation: typing 1.5s steps(9), blink .7s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2rem;
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
</style>
