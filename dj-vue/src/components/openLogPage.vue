<template>
    <section>
        <p class="content"><b>Total Service Hours:</b> {{ totalHours }}</p>
        <b-field label="Find a Service">
            <b-autocomplete
                v-model="name"
                :data="data"
                placeholder="e.g. Salvation Army"
                field="title"
                :loading="isFetching"
                @input="getAsyncData"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
        <b-collapse class="card collapseMargin" v-for="service in allService" v-bind:key="service.id">
            <div slot="trigger" slot-scope="props" class="card-header">
              <p class="card-header-title">
                  {{service.name}}
              </p>
              <a class="card-header-icon">
                  <b-icon
                      :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                <p><b>Name:</b> {{service.name}}</p>
                <p><b>Hours:</b> {{service.hours}}</p>
                <p><b>Location:</b> {{service.location}}</p>
                <p><b>Date:</b> {{service.date}}</p>
                <p><b>Purpose:</b> {{service.purpose}}</p>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item">Edit</a>
            </footer>
          </b-collapse>
    </section>
</template>

<script>
// import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      allService: [
        {
          id: 1,
          name: 'Salvation Army',
          hours: 6,
          location: 'Main Building',
          date: 'May 3, 2018',
          purpose: 'Organization'
        },
        {
          id: 2,
          name: 'Feed Homeless',
          hours: 9,
          location: 'Main Building',
          date: 'May 3, 2018',
          purpose: 'School'
        },
        {
          id: 3,
          name: 'Church Mission',
          hours: 7,
          location: 'Main Building',
          date: 'May 3, 2018',
          purpose: 'Church'
        }
      ],
      name: '',
      selected: null,
      isFetching: false,
      totalHours: 0
    }
  },
  methods: {
    calcHours: function () {
      var allHours = 0
      for (var i = 0; i < this.allService.length; i++) {
        allHours = allHours + this.allService[i].hours
      }
      this.totalHours = allHours
    }
    // You have to install and import debounce to use it,
    // it's not mandatory though.
    // getAsyncData: debounce(function () {
    //   this.data = []
    //   this.isFetching = true

    //   this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
    //     .then(({ data }) => {
    //       data.results.forEach((item) => this.data.push(item))
    //       this.isFetching = false
    //     })
    //     .catch((error) => {
    //       this.isFetching = false
    //       throw error
    //     })
    // }, 500)
  },
  watch: {
    $route: 'calcHours'
  },
  created () {
    this.calcHours()
  }
}
</script>

<style scoped>
  .collapseMargin {
    margin-bottom: 10px;
  }
</style>
