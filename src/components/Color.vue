<script setup>
import { ref } from 'vue'
const clase = ref('');
const props = defineProps({color: String})
const color = props.color;

defineEmits(['elegir'])

const seleccionar = () =>{
  clase.value = 'animate__bounceIn';
  var audio = new Audio(color+'.mp3');
  audio.play();
  setTimeout( () => clase.value = '',500);

}

</script>

<template>
  <div class="col color border border-dark animate_animated"
    :class="clase" :id="color" :color="color" @click="$emit('elegir',props.color, seleccionar())">
    </div>
</template>
<style>
  .color{ height: 150px;}
</style>