<script >
import { sendContact } from '@/services/ContactService';
export default{
    name:'ContactForm',
    data:()=>({
      conditional:true,
      submitBtnColorRed:true,
      contact:{ 
        name:'',
        email:'',
        message:''
      },
      response:{}
    }),
    mounted(){
      document.getElementById("submit_btn").addEventListener("click",this.checkRequiredValues)
    },  
    methods:{
      async saveContact() {
        const res = await sendContact(this.contact);
        this.response=res.data;
        this.conditional=false
      },
      checkRequiredValues(){
        var name_input = document.getElementById("name");
        var email_input = document.getElementById("email");
        var message_input = document.getElementById("message");
        if(name_input.value.length!=0 && email_input.value.length!=0 && message_input.value.length!=0){
          this.submitBtnColorRed=false;
          return
        }
        this.submitBtnColorRed=true;
      }
    },
}

</script>

<template>
  <div v-if="this.conditional">
    <form  @submit.prevent="saveContact()">
      <input id="name" name="nombre" v-model="contact.name" type="nombre" class="feedback-input" placeholder="Nombre" required/>   
      <input id="email" name="email" v-model="contact.email" type="email" class="feedback-input" placeholder="Email" required/>
      <textarea id="message" name="mensaje" v-model="contact.message" class="feedback-input" placeholder="Mensaje" required></textarea>
      <button v-if="this.submitBtnColorRed" id="submit_btn" class="button button_red"  type="submit">Enviar</button>
      <button v-else id="submit_btn" class="button" type="submit">Enviar</button>
    </form>
  </div>
  <div v-else class=" greeting ">
    <transition enter-active-class="animate__animated animate__fadeInLeft" name="fade" mode="in-out">
      <h2>Gracias {{response.name}} por ponerte en contacto!</h2>
    </transition>
  </div>
</template>

<style scoped lang="scss">

$primary: hsl(222,80%,50%);

div{
  width: 100%;
}
.feedback-input {
  color:black;
  font-weight:500;
  font-size: 18px;
  border-radius: px;
  line-height: 30px;
  border:none;
  transition: all 0.3s;
  margin-bottom: 15px;
  width:100%;
  outline:0;
}
.feedback-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-family: 'Montserrat';
  font-weight: bolder;
  opacity: 1; /* Firefox */
}
.feedback-input:-ms-input-placeholder{ /* Internet Explorer 10-11 */
  font-family: inherit;
}

.feedback-input:focus { border:2px $primary}

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  margin-left: 35%;
  width: 30%;
  background: black;
  border-radius:3rem;
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
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  border-radius: 1rem;
  padding: 1rem 1rem;
  width: 80%;
}

.button {
  width: 30%;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.button_red:hover {
  background-color: #c8140d;
  box-shadow: 0px 15px 20px rgba(141, 19, 23, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>