<template>
  <NavbarComponent />
  <div id="terra-page" class="mt-16 ml-5">
    <v-btn class="mt-2" color="orange" density="compact" variant="flat" @click="voltar()">
      <span>
        Voltar
      </span>
    </v-btn>
    <h2 class="text-h2 mt-10 text-center">
      Nação do Fogo
    </h2>
    <div class="mt-9">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageZuko"
            :titulo="titleZuko"
            :descricao="descZuko"
            :color="fogoColor"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageRoku"
            :titulo="titleRoku"
            :descricao="descRoku"
            :color="fogoColor"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageIroh"
            :titulo="titleIroh"
            :descricao="descIroh"
            :color="fogoColor"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageAzula"
            :titulo="titleAzula"
            :descricao="descAzula"
            :color="fogoColor"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageMako"
            :titulo="titleMako"
            :descricao="descMako"
            :color="fogoColor"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageOzai"
            :titulo="titleOzai"
            :descricao="descOzai"
            :color="fogoColor"/>
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
const fogoColor= '#A3461D';
const titleZuko = 'Zuko';
const descZuko = 'Zuko é um mestre real e dominador de fogo da Nação do Fogo que reinou como Senhor do Fogo de 100 DG até sua abdicação em 167 DG. Ele é o filho mais velho e único da Princesa Ursa e do Senhor do Fogo Ozai. Originalmente o principal inimigo da Equipe Avatar, Zuko dedicou três anos tentando capturar o Avatar há muito perdido para acabar com seu banimento e recuperar sua honra como Príncipe Herdeiro da Nação do Fogo. Ele é reconhecível pela distinta cicatriz de queimadura no lado esquerdo de seu rosto, que foi dada a ele por seu pai, Ozai, pouco antes de seu banimento, como resultado de um incidente em que ele involuntariamente desrespeitou seu pai ao falar fora de hora e recusando-se a duelar com ele.';
const imageZuko = '../../src/assets/Zuko.webp';
const titleAzula = 'Azula';
const descAzula = 'Azula era uma princesa da Nação do Fogo, filha do Senhor do Fogo Ozai e Ursa, irmã mais nova de Zuko e meia-irmã mais velha de Kiyi. Ela era uma adversária chave da Equipe Avatar,[5] perseguindo Avatar Aang e seu irmão banido por todo o Reino da Terra, acompanhados por seus então dois melhores amigos, Mai e Ty Lee. Um prodígio dominador de fogo, Azula era manipuladora e obcecada por poder. Ela era uma estrategista habilidosa que orquestrou o golpe na capital do Reino da Terra, Ba Sing Se, e interrompeu a invasão no Dia do Sol Negro.';
const imageAzula = '../../src/assets/Azula.webp';
const titleRoku = 'Roko';
const descRoku = 'Roku foi o Avatar nascido na Nação do Fogo, sucedendo imediatamente ao Avatar Kyoshi e precedendo o Avatar Aang. A memória de Roku serviu como força orientadora para Aang durante sua busca para acabar com a Guerra dos Cem Anos. Roku era um Avatar sábio e misericordioso com boas intenções. Vivendo num período de mudança, revolução tecnológica e expansão nacionalista, ele trabalhou incansavelmente para manter a paz entre as quatro nações durante uma época de questões políticas complexas e relações diplomáticas tensas.[2] No entanto, ele mesmo reconheceu que foi muito indeciso durante sua vida. A longa amizade de Roku com o Senhor do Fogo Sozin resultou em sua relutância em acabar com a vida de seu amigo e, portanto, com suas ambições imperiais. Isso acabou levando à morte de Roku, impedindo-o de interromper uma guerra que duraria cem anos, algo que pesou muito sobre ele em sua vida após a morte. Aang herdou o fardo de Roku de curar o mundo devastado pela guerra, e Roku acreditava firmemente que Aang estava destinado a corrigir seus erros.';
const imageRoku = '../../src/assets/Roku.webp';
const titleIroh = 'Iroh';
const descIroh = 'Iroh era um general aposentado da Nação do Fogo, um ex-príncipe herdeiro da nação, um Grande Lótus da Ordem do Lótus Branco,[1] um mestre dominador de fogo e um sábio mentor de seu sobrinho Zuko.[7] Ele era o filho mais velho do Senhor do Fogo Azulon e Ilah e o irmão mais velho de Ozai. A conhecida habilidade de Iroh de cuspir fogo e suas afirmações de "matar" o último dragão lhe renderam o título honorário de "O Dragão do Oeste".';
const imageIroh = '../../src/assets/Iroh.webp';
const titleMako = 'Mako';
const descMako = 'Mako é um dominador de fogo de uma família multicultural que cresceu nas ruas de Republic City como órfão com seu irmão mais novo, Bolin. Mako sempre usou seu lenço vermelho característico que já foi de seu pai, que foi assassinado junto com sua mãe quando ele era menino. Ele formou uma equipe profissional com seu irmão e Hasook e aspirava que sua nova carreira lhe trouxesse fama e fortuna. Suas aspirações mudaram, porém, quando conheceu Avatar Korra, que se juntou à equipe para substituir Hasook e se tornou um amigo leal. Mako, com a ajuda de seus companheiros, conseguiu levar o time ao segundo lugar do campeonato. Após a conclusão do torneio, Mako juntou-se a Korra em seus esforços para deter os Equalistas.';
const imageMako = '../../src/assets/mako.webp';
const titleOzai = 'Ozai';
const descOzai = 'Ozai foi o governante da Nação do Fogo durante os anos finais da Guerra dos Cem Anos, reinando como Senhor do Fogo de 95 a 100 d.C..[5] Ele era o segundo filho do Senhor do Fogo Azulon e Ilah, o irmão mais novo de Iroh, tio de Lu Ten, marido de Ursa, pai do Príncipe Zuko e da Princesa Azula, e avô paterno de Izumi. Ozai era um mestre em dominar o fogo e, antes do fim da guerra, era considerado o dominador de fogo mais poderoso do mundo.';
const imageOzai = '../../src/assets/Ozai.webp';
const voltar = () => {
  router.go(-1);
}
</script>
