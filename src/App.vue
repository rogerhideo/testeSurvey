<template>
  <div id="app" class="min-h-screen">
    <div class="flex  items-center justify-center">
      <div id="nav">     
        <router-link to="/">Home</router-link> |
        <router-link to="/newsurvey">New Survey</router-link> 
      </div>
    </div>
    
      <NotificationContainer />
  
        <router-view />
    
  </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue'
export default {
  components: {
    NotificationContainer
  }
}

</script>

<style >
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: cornflowerblue;
}


</style>
