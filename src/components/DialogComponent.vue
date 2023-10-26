<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-card class="mx-auto" max-width="344" variant="flat" :color="color">
        <v-card-title>
          {{ titulo }}
        </v-card-title>
        <v-img :src="image" :max-width="600"/>
        <v-card-actions>
          <v-btn color="orange" v-bind="props" variant="flat">
            Mais Informações
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card :title="titulo" :color="color">
        <v-img :src="image"/>
        <v-card-text>
          {{ descricao }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="orange"
            @click="isActive.value = false">
              <span style="color: #ffffffff;">Fechar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DialogComponent',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
    titulo: {
      type: String,
      default: '',
      required: false,
    },
    descricao: {
      type: String,
      default: '',
      required: false,
    },
    image: {
      type: String,
      default: '',
      required: false,
    },
  },
});
</script>
