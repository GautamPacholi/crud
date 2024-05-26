<template>
<div class="container mt-3 p-3 border border-3">
 
    <table class="table">
      <tr>
        <td colspan="5"><router-link to="/Add">
  <button class="btn btn-primary">Create Invoice</button>
</router-link>
</td>
        <td>
          <input type="text" class="form-control" placeholder="Search Invoice">
        </td>
        <td >
          <input type="text" class="form-control" placeholder="Search Status"></td>
        </tr>
        </table>
        <table class="table">
          <thead>
        <tr class="table-active">
         <td>#</td>
         <td>Status</td>
         <td>Client</td>
         <td>Total</td>
         <td>Date</td>
         <td>Balance</td>
         <td>Action</td>
        </tr>
        </thead>
        <tbody>
         <tr  v-for="(item, index) in ClientData" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.status}}</td>
          <td>{{item.Client}}</td>
          <td>{{item.Total}}</td>
          <td>{{item.Date}}</td>
          <td>{{item.Balance}}</td>
          <td>
           <RouterLink  :to="{ name:'update', params:{ data: JSON.stringify(item) }}"><button class="btn btn-success mx-2" >Update
              </button></RouterLink>
         <button class="btn btn-danger" @click="open(item.id)">Delete</button></td>
         </tr>
         </tbody>

    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentpage === 1">Previous</button>
      <span>{{ currentpage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentpage === totalPages">Next</button>
    </div>
  
    </div>
    <alertMessage  :visible="this.showModal" variant="Delete Confirmation" @closes="close" @delete="deleteClient"></alertMessage>
</template>

<script>
import alertMessage from './alertMessage.vue';
import axios from 'axios'
export default {
  name: 'clientDetail',
components:{
alertMessage,
},

  data(){
    return{
      id:'',
      showModal:false,
      itemsperpage:10,
      currentpage:1,
     content:[],
      
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.content.length / this.itemsperpage);
    },
    ClientData() {
      const startIndex = (this.currentpage - 1) * this.itemsperpage;
      const endIndex = startIndex + this.itemsperpage;
      return this.content.slice(startIndex, endIndex);
    }
  },
  methods:{
    async fetch(){
      try{
        const response=await axios.get("http://localhost:3000/user");
        this.content=response.data;
      }
      catch(error){
        console.log(error);
      }
    },
   async deleteClient(){
    console.log("hmm what");
      const response=await axios.delete("http://localhost:3000/user/"+this.id);
      console.log(response);
      this.fetch();
      this.id="";
      this.showModal=false;
    },
    prevPage() {
      if (this.currentpage > 1) {
        this.currentpage--;
      }
    },
    nextPage() {
      if (this.currentpage < this.totalPages) {
        this.currentpage++;
      }
    },
    close(){
      console.log("working");
      this.showModal=false;
      this.id=''
    },
    open(id){
      console.log("hello");
      this.id=id;
      this.showModal=true;
    }
  }
  ,mounted(){
     this.fetch();
  },
  watch: {
    showModal(newVal) {
      console.log('showModal changed to:', newVal);
    },
  },


}
</script>

