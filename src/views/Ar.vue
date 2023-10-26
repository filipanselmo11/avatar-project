<template>
  <NavbarComponent />
  <div id="ar-page" class="mt-16 ml-5">
    <v-btn class="mt-2" color="orange" density="compact" variant="flat" @click="voltar()">
      <span>Voltar</span>
    </v-btn>
    <h2 class="text-h2 mt-10 text-center">
      Nômades do Ar
    </h2>
    <div class="mt-9">
      <v-row align="center" justify="center">
        <v-col cols="4">
          <DialogComponent :image="image" :color="arColor" />
        </v-col>
        <v-col cols="4">
          <DialogComponent :image="image" :color="arColor" />
        </v-col>
        <v-col cols="4">
          <DialogComponent :image="image" :color="arColor" />
        </v-col>
        <v-col cols="4">
          <DialogComponent :image="image" :color="arColor" />
        </v-col>
        <v-col cols="4">
          <DialogComponent :image="image" :color="arColor" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DialogComponent from '@/components/DialogComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const arColor = '#5A84B4';
const image = "./../src/assets/avatar.jpg";

const voltar = () => {
  router.go(-1);
}
</script>
