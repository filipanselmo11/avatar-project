<template>
  <NavbarComponent />
  <br>
  <div class="mt-16">
    <v-row class="ml-auto" align="center" justify="center">
      <v-col cols="6">
        <CardComponent
          :titulo="titulo1"
          :color="color1"
          @go-to="goToAgua()"/>
      </v-col>
      <v-col cols="6">
        <CardComponent
          :titulo="titulo2"
          :color="color2"
          @go-to="goToTerra()"/>
      </v-col>
      <v-col cols="6">
        <CardComponent
          :titulo="titulo3"
          :color="color3"
          @go-to="goToAr()"/>
      </v-col>
      <v-col cols="6">
        <CardComponent
          :titulo="titulo4"
          :color="color4"
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
const titulo1 = "Tribo da Água";
const color1 = '#365598';
const titulo2 = "Reino da Terra";
const color2 = '#9F7F42';
const titulo3 = "Nômades do Ar";
const color3 = '#5A84B4';
const titulo4 = "Nação do Fogo";
const color4 = '#A3461D';

const goToAgua = () => {
  console.log('Foi Pra água');
}

const goToTerra = () => {
  console.log('Foi Pra terra');
}

const goToAr = () => {
  console.log('Foi Pro ar');
}

const goToFogo = () => {
  console.log('Foi Pro fogo');
}

</script>
