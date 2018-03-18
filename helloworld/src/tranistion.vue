<template>
  <div id="">
      <button v-on:click='show =!show'> show/hide text</button>
      <transition name='fade'>
          <p v-if='show'>你好！</p>
      </transition>
  </div>
</template>

<script>
export default {
    name:'demo',
    data(){
        return {
            show:true
        }
    }

}
</script>

<style scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity(0.5s);
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
    }

</style>
