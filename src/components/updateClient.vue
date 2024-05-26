<template>
  <div class="container mt-5">
 <h1> Update Client Details</h1>
   <form>
  <div class="form-group">
    <label for="Email1">Client Email</label>
    <input v-model="content.Client" type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="balance">Balance</label>
    <input v-model="content.Balance" type="text" class="form-control" id="balance" placeholder="enter the Balance">
  </div>
  <div class="form-group">
    <label for="status">Status</label>
    <input v-model="content.status" type="text" class="form-control" id="status" placeholder="enter the Status">
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input v-model="content.Date" type="date" class="form-control" id="date" placeholder="enter the date">
  </div>
  <div class="form-group">
    <label for="Total">Total</label>
    <input v-model="content.Total" type="text" class="form-control" id="Total" placeholder="enter the Total Balance">
  </div>
  <div>

<button class="btn btn-primary mt-3" @click.prevent="updatedata" >Submit</button>
<RouterLink to="/"><button class="btn btn-danger float-end mt-3">Back</button>
</RouterLink></div>

</form>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name:'updateClient',
    data(){
      return{
        tellme:false,
       content:[],
      }
    },
    methods:{
 async updatedata(){
  try{
        await axios.put('http://localhost:3000/user/'+this.content.id,this.content);
        this.tellme=true;
        this.$router.push('/');
  
      }
      catch(error){
         console.log(error);
      }
}
},
beforeMount(){
  this.content=JSON.parse(this.$route.params.data);
},
beforeUnmount(){
if(this.tellme) alert("updated successfully");
}

    
}
</script>