<template>
  <NavbarComponent />
  <br>
  <div class="mt-16">
    <v-row class="ml-auto" align="center" justify="center">
      <v-col cols="12" md="6" lg="6" xl="6">
        <CardComponent
          :titulo="titulo1"
          :color="color1"
          :image="image"
          @go-to="goToAgua()"/>
      </v-col>
      <v-col cols="12" md="6" lg="6" xl="6">
        <CardComponent
          :titulo="titulo2"
          :color="color2"
          :image="image"
          @go-to="goToTerra()"/>
      </v-col>
      <v-col cols="12" md="6" lg="6" xl="6">
        <CardComponent
          :titulo="titulo3"
          :color="color3"
          :image="image"
          @go-to="goToAr()"/>
      </v-col>
      <v-col cols="12" md="6" lg="6" xl="6">
        <CardComponent
          :titulo="titulo4"
          :color="color4"
          :image="image"
          @go-to="goToFogo()"/>
      </v-col>

    </v-row>
  </div>
  <!-- <div id="home-page">
    <NavbarComponent/>
    <h1>HOME</h1>
  </div> -->
</template>

<script lang="ts" setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useRouter } from 'vue-router';
const image = "../../src/assets/avatar-avatar-the-last-airbender-elements-wallpaper-preview.jpg";
const titulo1 = "Tribo da Água";
const color1 = '#365598';
const titulo2 = "Reino da Terra";
const color2 = '#9F7F42';
const titulo3 = "Nômades do Ar";
const color3 = '#5A84B4';
const titulo4 = "Nação do Fogo";
const color4 = '#A3461D';

const router = useRouter();

const goToAgua = () => {
  router.push('/agua');
}

const goToTerra = () => {
  router.push('/terra');
}

const goToAr = () => {
  router.push('/ar');
}

const goToFogo = () => {
  router.push('/fogo');
}

</script>
