import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class ViewLogin extends Vue{

  form = {
    username : "",
    password : ""
  }
  

  doLogin(){
    console.log(this.form);
    this.$router.push('/Dashboard');
  }

  
}