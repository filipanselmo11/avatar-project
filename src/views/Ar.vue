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
          <DialogComponent
            :image="imageAang"
            :color="arColor"
            :titulo="titleAang"
            :descricao="descAang"
          />
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="imageTenzin"
            :color="arColor"
            :titulo="titleTenzin"
            :descricao="descTenzin"
          />
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="imageJinora"
            :color="arColor"
            :titulo="titleJinora"
            :descricao="descJinora"
          />
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :image="imageYangchen"
            :color="arColor"
            :titulo="titleYangchen"
            :descricao="descYangchen"
          />
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
const titleAang = 'Aang';
const descAang = 'Aang foi um Nômade do Ar nascido em 12 BG e o Avatar durante a Guerra dos Cem Anos, sucedendo ao Avatar Roku e precedendo o Avatar Korra. Como o Avatar de seu tempo, ele era a única pessoa capaz de usar todas as quatro artes de dobra: dobra de ar, dobra de água, dobra de terra e dobra de fogo. Ele também foi um dos poucos Avatares selecionados e um dos primeiros em muitos ciclos[8] a aprender a antiga arte da dobra de energia, bem como o primeiro Avatar conhecido por ter usado ativamente a técnica.';
const imageAang = '../../src/assets/Aang-1.webp';
const titleTenzin = 'Tenzin';
const descTenzin = 'Tenzin é o filho mais novo do Avatar Aang e Katara e o mais velho mestre dobrador de ar vivo. Ele mora na Ilha do Templo do Ar com os Acólitos do Ar, sua esposa Pema e seus quatro filhos: Jinora, Ikki, Meelo e Rohan. Durante o ressurgimento da dobra de ar em todo o Reino da Terra após a Convergência Harmônica de 171 DG, Tenzin e sua família se mudaram temporariamente para o Templo do Ar do Norte.[7] Um homem calmo e sério, ele representou a Nação Aérea no Conselho da República Unida em Republic City antes de sua dissolução e foi responsável por educar o Avatar Korra na arte da dobra de ar e da espiritualidade.';
const imageTenzin = '../../src/assets/tenzin-1.webp';
const titleJinora = 'Jinora';
const descJinora = 'Jinora é a primogênita e filha mais velha de Tenzin e Pema e neta de Katara e do falecido Avatar Aang. Ela mora na Ilha Air Temple com seus pais e seus três irmãos mais novos: Ikki, Meelo e Rohan. Possuidora de um ávido interesse por livros e tranquila em geral, Jinora é a mais jovem mestre dobradora de ar conhecida, a primeira de sua geração,[4] e tem uma afinidade natural com espíritos; antes da reabertura dos portais espirituais, ela era um dos poucos humanos que conseguiam se comunicar e perceber os espíritos no mundo físico. Como resultado, ela se tornou a guia do Avatar Korra para o Mundo Espiritual. Algum tempo depois de 171 DG, ela iniciou um relacionamento romântico com Kai.';
const imageJinora = '../../src/assets/Jinora.webp';
const titleYangchen = 'Yangchen';
const descYangchen = 'Yangchen foi o Avatar Nômade do Ar, sucedendo ao Avatar Szeto e precedendo o Avatar Kuruk. Ela cresceu em uma época bastante isolacionista para as quatro nações, após o Caso Platinum. Depois de dominar todos os elementos em sua juventude, ela estava ansiosa para fazer a diferença no mundo, apesar de sua inexperiência.[8] Após o seu confronto com o General Old Iron em Tienhaishi, Yangchen resolveu adaptar-se à complexa estratégia política das quatro nações, usando a manipulação, a espionagem e o engano em seu benefício numa época em que a lealdade era comprada em vez de conquistada.';
const imageYangchen = '../../src/assets/Yangchen-1.webp';
const voltar = () => {
  router.go(-1);
}
</script>
