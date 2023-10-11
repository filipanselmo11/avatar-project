<template>
  <v-card class="mx-auto" max-width="344" :color="color" variant="flat">
    <v-card-title>
      {{ titulo }}
    </v-card-title>
    <v-img :src="image"/>
    <v-card-actions>
      <v-btn
        color="orange"
        density="compact"
        variant="flat"
        @click="emitGoTo">
        Ir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CardComponent",
  props:{
    titulo: {
      type: String,
      default: '',
      required: false,
    },
    color: {
      type: String,
      default: '',
      required: false,
    },
    image : {
      type: String,
      default: '',
      required: false,
    },
  },
  methods:{
    emitGoTo(){
      this.$emit('go-to', '');
    },
  },
});
</script>
