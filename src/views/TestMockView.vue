<template>
  <div class="container">
      <div v-if="list.length">
          <ul class="list">
            <li v-for="item in list" :key="item.id">
              <img :src="item.imgUrl" >
              <p>{{ item.title }}</p>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'TestMockView',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getApiData()
  },
  methods: {
    getApiData () {
      const URL = '/api/list'
      this.$http.get(URL).then(res => {
        console.log(res.data)
        this.list = res.data.data.list
      }, res => {
        // err callback
      })
    }
  }
}
</script>
