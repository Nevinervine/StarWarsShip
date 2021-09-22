<template>
  <div class="container">
    <router-link  tag="div" class="" to="/">на главную</router-link>
    <div class="ship-detail">
    <div class="ship-detail__item" v-if="date.name!=='unknown'">
      имя корабля:
      <span>{{date.name}}</span>
    </div>
    <div class="ship-detail__item"  v-if="date.model!=='unknown'">
      Модель корабля:
      <span>{{date.model}}</span>
    </div>
    <div class="ship-detail__item"  v-if="date.manufacturer!=='unknown'">
      производитель:
      <span>{{date.manufacturer}}</span>
    </div>
    <div class="ship-detail__item"  v-if="date.cost_in_credits!=='unknown'">
      cтоимость:
      <span>{{date.cost_in_credits}}</span>
    </div>
    <div class="ship-detail__item"  v-if="date.length!=='unknown'">
      Длинна:
      <span>{{date.length}}</span>
    </div>
    <div class="ship-detail__item"  v-if="date.max_atmosphering_speed!=='n/a'">
      максимальная скорость:
      <span>{{date.max_atmosphering_speed}}</span>
    </div>

    </div>

  </div>
</template>

<script>


import axios from "axios";
const baseURL = "https://swapi.dev/api/starships"
export default {
  name: 'detail',
  props: ['id'],
  data() {
    return {
      date: [],
    }
  },
  async created() {
    try {
      const res = await axios.get(baseURL+ '/' + this.id)
      this.date = res.data;
    } catch (e) {
      console.error(e)
    }
  }

}
</script>
<style>
  .ship-detail{
    border: 1px solid black;
    padding: 10px;
    margin-top: 20px;
  }
  .ship-detail__item{
    margin-bottom: 20px;
  }
</style>