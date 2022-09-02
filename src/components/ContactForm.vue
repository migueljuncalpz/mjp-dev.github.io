<script >
import { sendContact } from '@/services/ContactService';
export default{
    name:'ContactForm',
    data:()=>({
      contact:{ 
        name:'',
        email:'',
        message:'',
      }
    }),
    methods:{
      async saveContact(){
        const res = await sendContact(this.contact);
        alert(res);
      }
    },
}

</script>

<template>
  <form  @submit.prevent="saveContact()">
    <input name="nombre" v-model="contact.name" type="nombre" class="feedback-input" placeholder="Nombre" required/>   
    <input name="email" v-model="contact.email" type="email" class="feedback-input" placeholder="Email" required/>
    <textarea name="mensaje" v-model="contact.message" class="feedback-input" placeholder="Mensaje" required></textarea>
    <input id="submit" type="submit" name="submitBtn" />
  </form>    
</template>

<style  lang="scss">

$primary: hsl(222,80%,50%);
.greeting,
form{
    padding:1rem 2rem;
    padding-bottom: 3rem;
}
.feedback-input {
  color:black;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  border:1px solid black;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px $primary}

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  width: 100%;
  background: black;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:ghostwhite; color: black;}

.greeting{
  backdrop-filter:blur(2px)
}

</style>