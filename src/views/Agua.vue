<template>
  <NavbarComponent />
  <div id="agua-page" class="mt-16 ml-5">
    <v-btn class="mt-2" color="orange" density="compact" variant="flat" @click="voltar()">
      Voltar
    </v-btn>
    <h2 class="text-h2 mt-10 text-center">
      Tribo da Água
    </h2>
    <div class="mt-9">
      <v-row align="center" justify="center">
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle1"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle2"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle3"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle4"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle5"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle6"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle7"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle8"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle9"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle10"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle11"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle12"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle13"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle14"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle15"
            :descricao="descPersonagem"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="image"
            :color="aguaColor"
            :titulo="dialogTitle16"
            :descricao="descPersonagem"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import DialogComponent from '@/components/DialogComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const image = "../../src/assets/avatar-avatar-the-last-airbender-elements-wallpaper-preview.jpg";
const aguaColor = '#365598';
const dialogTitle1 = 'Katara';
const dialogTitle2 = 'Sokka';
const dialogTitle3 = 'Gran Gran';
const dialogTitle4 = 'Mestre Paku';
const dialogTitle5 = 'Princesa Yue';
const dialogTitle6 = 'Hahn';
const dialogTitle7 = 'Malina';
const dialogTitle8 = 'Arnook';
const dialogTitle9 = 'Thod';
const dialogTitle10 = 'Korra';
const dialogTitle11 = 'Tonraq';
const dialogTitle12 = 'Senna';
const dialogTitle13 = 'Desna';
const dialogTitle14 = 'Eska';
const dialogTitle15 = 'Unalaq';
const dialogTitle16 = 'Varrick';
const descPersonagem = 'LOrem ipsum, spectro patronus asasdkjadskadskadskadskasdsda .asd ,asdndsa';
const voltar = () => {
  router.go(-1);
}
</script>
