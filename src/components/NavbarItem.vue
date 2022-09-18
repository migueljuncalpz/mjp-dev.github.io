<script>

  import HeaderItem from './HeaderItem.vue';
  export default {
    name: 'NavbarItem',
    data(){
      return{
        scrollNav:null,
        mobile:null,
        mobileNav:null,
        windowsWidth:null
      }
    },
    created(){
      window.addEventListener("resize",this.checkScreen);
    },
    mounted(){
      window.addEventListener("scroll",this.updateScroll);
      window.addEventListener("load",this.checkScreen());
    },
    components:{
      HeaderItem,
    },
    methods:{
      toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
      },
      updateScroll(){
        const scrollPosition= window.scrollY;
        if(scrollPosition>50){
          this.scrollNav=true;
          return;
        }
        this.scrollNav=false;
      },
      checkScreen(){
        this.windowsWidth = window.innerWidth;
        if(this.windowsWidth<=750){
          this.mobile=true;
          console.log("mobile")
          return;
        }
        this.mobile=false;
        this.mobileNav=false;
        console.log("pc")
        return;
      }
    }
  }
</script>

<template>
  <header :class="{'scrolled-nav':scrollNav}">
    <nav>
      <div class="branding">
        <HeaderItem></HeaderItem>
      </div>
      <ul v-show="!mobile" class="navigation">
        <router-link class="link" :to="{name:'home'}">About</router-link>
        <router-link class="link" :to="{name:'projects'}">Projects</router-link>
        <router-link class="link" :to="{name:'contact'}">Contact</router-link>
      </ul>
      <div class="icon ">
        <font-awesome-icon @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active': mobileNav }"/>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <router-link @click="toggleMobileNav" class="link" :to="{name:'home'}">About</router-link>
          <router-link @click="toggleMobileNav" class="link" :to="{name:'projects'}">Projects</router-link>
          <router-link @click="toggleMobileNav" class="link" :to="{name:'contact'}">Contact</router-link>
        </ul> 
      </transition>
    </nav>
  </header>
</template>

<style scoped lang="scss" >
header{
  background-color:rgba(255, 255, 255, 0.6);
  z-index: 99;
  width: 100%;
  position: sticky;
  top:0;
  transition: .5s ease all;
  color:inherit;
  nav{
    display:flex;
    flex-direction: row;
    padding:12px 0;
    transition: .5s ease all;
    width: 90%;
    margin:0 auto;
    @media(min-width: 1140px){
      max-width: 1140px;
    }
    ul,
    .link{
      font-weight:500;
      color: inherit;
      list-style: none;
      text-decoration: none;
    }
    a{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link{
      color:black;
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover{
        font-weight: bolder;
        border-color: black;
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1.5);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1.5);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1.5);
        transition: all 200ms ease-in;
        transform: scale(1.5);
      }
    }
    .branding{
      display: flex;
      align-items: center;

    }
    .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .icon{
      display: flex;
      align-items: center;
      position: absolute;
      top:0;
      right: 2rem;
      height: 100%;
      
      .fa-bars{
        cursor: pointer;
        font-size: 28px;
        transition: 0.8 ease all;
      }
    }
    .icon-active{
      transform: rotate(180deg);
    }
    .dropdown-nav{
      align-content: stretch;
      margin:0;
      display: inline-flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100vh;
      background-color: black;
      top:0;
      left: 0;
      a{
        width: fit-content;
        margin-left: 0;
        color:white;
        &:hover {
          font-weight: bolder;
          border-color: white;
          -webkit-transition: all 200ms ease-in;
          -webkit-transform: scale(1.5);
          -ms-transition: all 200ms ease-in;
          -ms-transform: scale(1.5);
          -moz-transition: all 200ms ease-in;
          -moz-transform: scale(1.5);
          transition: all 200ms ease-in;
          transform: scale(1.5);
        }
      }

    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
      transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
      transform:translateX(-250px);
    }
    .mobile-nav-enter-to{
      transform: translateX(0px);
    }

  }
}
.scrolled-nav{
  background-color: white;
  nav{
    padding:8px 0px
  }
}
</style>
