<template>
  <div>
    <h1>ships</h1>
      <router-link class="ships__item"  v-for="(ship,i) in ships" :key="ship.id" tag="div"  :to="{name: 'detail', params: {id:shipsId[i]}}">{{ship.name}}</router-link>
    <div class="paggin">
    <div class="paggin__item" v-if="prev" @click="prevShips()">prev</div>
    <div class="paggin__item"  v-if="next" @click="nextShips()">next</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const baseURL = "https://swapi.dev/api/starships"
export default {
  name: 'app',
  data() {
    return {
      ships: [],
      shipsId:[],
      next:null,
      prev:null,
      page:1,
    }
  },
  created() {
    var paramsString = document.location.search;
    var searchParams = new URLSearchParams(paramsString);
    if (searchParams.get("page") !== null) {
      this.page = parseInt(searchParams.get("page"));
    }
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get(baseURL+'?page='+this.page);
        this.next=res.data.next;
        this.prev=res.data.previous;
        this.ships = res.data.results;
        for(let i=0;i<this.ships.length;i++) {
          let url = res.data.results[i].url.split("/");
          this.shipsId.push(url[url.length - 2]);
        }
      } catch(e) {
        console.error(e)
      }
    },
    prevShips(){
      this.page=this.page-1;
      this.getData();
      let Url = window.location.href.split("?")[0];
      window.history.pushState('name', '', Url + '?page=' + this.page);
    },
    nextShips(){
      this.page=this.page+1;
      this.getData();
      let Url = window.location.href.split("?")[0];
      window.history.pushState('name', '', Url + '?page=' + this.page);
    }
  }
}
</script>

<style>
.ships__item{
  margin-bottom: 10px;
  cursor: pointer;
}
.paggin{
  display: flex;
}
.paggin__item{
  margin: 0 7px;
  font-size: 16px;
  padding: 5px 15px;
  border: 1px solid #E3E3E3;
  border-radius: 4px;
  cursor: pointer;
  line-height: 20px;
  margin-top: 20px;
}
</style>