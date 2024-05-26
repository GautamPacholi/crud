<template>
<div v-if="openclose" class="modal fade show" tabindex="-1" style="display: block;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ variant }}</h5>
        <button type="button" class="btn-close" @click="close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Are You Sure.</p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="close"  data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="deleteclient">Confirm</button>
      </div>
    </div>
  </div>
</div>
    </template>

    <script>
    export default{
    name:'alertMessage',
    props:{
        visible:Boolean,
        variant:String,

    }
,
data(){
    return{
    openclose:this.visible,}
},
methods:{
    close(){
      this.$emit('closes');
    },
    deleteclient(){
      this.$emit('delete');
      this.openclose=false;
      
    }
},
watch: {
    visible(newVal) {
      this.openclose = newVal;
    },
  },

    }
    </script>