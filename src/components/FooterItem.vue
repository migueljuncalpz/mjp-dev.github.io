<script>
export default{
    name:'FooterItem',
    data(){

    },
}
</script>

<template>
    <footer>
        Footer 2022 
    </footer>
</template>

<style lang="scss">
footer{
    z-index: 9999;
    left: 0;
    bottom: 0;
    position: sticky;
    display: grid;
    place-items: center;
    background-color: rgba($color: #000000, $alpha: 0.3); 
    height: 50px;
    width: 100%;
}
</style>