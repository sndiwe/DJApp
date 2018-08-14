<template>
  <div class="box has-text-centered">
    <img src="../assets/ndiweLogo.png" style="width:50%">
     <section>
           <b-tabs @change="onChange">
               <b-tab-item label="New">
                   <component v-cloak :is="myComponent"/>
               </b-tab-item>
               <b-tab-item label="Existing" icon="google-photos">
                 <component v-cloak :is="myComponent"/>
               </b-tab-item>
           </b-tabs>
       </section>
       <b-icon pack="fas" icon="user" size="is-small"></b-icon>
    <!-- <div class="box has-text-centered">
      <a class="button is-info" @click="createLog()">New Log</a>
      <a class="button is-danger" @click="openLog()">Existing Log</a>
    </div> -->
  </div>
</template>

<script>
import newLogPage from '@/components/newLogPage'
import openLogPage from '@/components/openLogPage'
export default {
  name: 'homePage',
  data () {
    return {
      msg: "Welcome to DJ's App",
      myComponent: newLogPage
    }
  },
  components: {
    newLogPage,
    openLogPage
  },
  methods: {
    onChange (value) {
      console.log(value)
      if (value === 0) {
        this.myComponent = newLogPage
      }
      if (value === 1) {
        this.myComponent = openLogPage
      }
    },
    myFunction (message) {
      console.log(message)
    },
    createLog: function () {
      this.$router.push({
        name: 'newLogPage',
        path: '/newLog'
      })
    },
    openLog: function () {
      this.$router.push({
        name: 'openLogPage',
        path: '/openLog'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
}
</style>
