<template>
  <NavbarComponent />
  <div id="terra-page" class="mt-16 ml-5">
    <v-btn class="mt-2" color="orange" density="compact" variant="flat" @click="voltar()">
      <span>
        Voltar
      </span>
    </v-btn>
    <h2 class="text-h2 mt-10 text-center">
      Reino da Terra
    </h2>
    <div class="mt-9">
      <v-row align="center" justify="center">
        <v-col cols="4">
          <DialogComponent
            :titulo="titleToph"
            :image="imageToph"
            :color="terraColor"
            :descricao="descToph"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :titulo="titleKyoshi"
            :image="imageKyoshi"
            :color="terraColor"
            :descricao="descKyoshi"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :titulo="titleSuki"
            :image="imageSuki"
            :color="terraColor"
            :descricao="descSuki"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :titulo="titleKuvira"
            :image="imageKuvira"
            :color="terraColor"
            :descricao="descKuvira"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :titulo="titleSuyin"
            :image="imageSuyin"
            :color="terraColor"
            :descricao="descSuyin"/>
        </v-col>
        <v-col cols="4">
          <DialogComponent
            :titulo="titleLin"
            :image="imageLin"
            :color="terraColor"
            :descricao="descLin"/>
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
const terraColor= '#9F7F42';
const imageToph = '../../src/assets/toph-1.webp';
const titleToph = 'Toph Beifong';
const descToph = 'Toph Beifong é uma mestre em dobra de terra, uma das mais poderosas de seu tempo e a descobridora da dobra de metal. Cega desde o nascimento, Toph era constantemente tratada com condescendência por causa de sua deficiência visual, principalmente por seus pais superprotetores, Lao e Poppy Beifong. Ao descobrir os texugos, animais dominadores de terra que também são cegos, ela aprendeu a usar a dobra de terra como uma extensão de seus sentidos. Isto deu-lhe a capacidade de "ver" cada vibração que passa pelo solo.Tendo desenvolvido seu próprio estilo único de dobra de terra, Toph adquiriu uma personalidade forte e tornou-se famosa por vencer torneios subterrâneos de dobra de terra sob o pseudônimo de "The Blind Bandit", fazendo isso pelas costas de seus pais. Embora inicialmente desinteressada em ajudar diretamente no esforço de guerra, ela finalmente escolheu deixar para trás sua antiga vida e viajar com Avatar Aang e seus amigos como seu professor de domínio da terra, quando seus pais finalmente se tornaram insuportáveis ​​para ela. O domínio total de Toph sobre o domínio da terra, a personalidade única e o pragmatismo atencioso fizeram dela uma adição valiosa à equipe.';
const imageKyoshi = '../../src/assets/Kyoshi-1.webp';
const titleKyoshi = 'Kyoshi';
const descKyoshi = 'Kyoshi foi o Avatar nascido no Reino da Terra, sucedendo imediatamente ao Avatar Kuruk da Tribo da Água do Norte e precedendo o Avatar Roku da Nação do Fogo. Ela morreu aos 230 anos de idade, tornando-a a pessoa mais velha confirmada,[12] e também era uma mulher excepcionalmente alta, elevando-se sobre a maioria das pessoas.[3] Kyoshi nasceu de dois criminosos: Jesa, uma freira renegada Air Nomad, e Hark, um ladrão de uma família empobrecida de atores do Reino da Terra. Ela herdou sua roupa exclusiva de seus pais, adotando o cocar dourado e os leques de guerra de metal de sua mãe e a pintura facial daofei de seu pai.';
const imageSuki='../../src/assets/Suki-1.webp';
const titleSuki = 'Suki';
const descSuki = 'Suki era a líder de um dos bandos de Guerreiros Kyoshi da Ilha Kyoshi do Reino da Terra. Tendo começado seu treinamento quando tinha apenas oito anos de idade,[3] ela era muito respeitada por seus companheiros guerreiros por sua liderança e habilidades de combate. Quando a Equipe Avatar chegou à Ilha Kyoshi, Suki e alguns outros Guerreiros Kyoshi os capturaram, pensando que eram espiões da Nação do Fogo, mas os libertaram e fizeram amizade com eles depois de perceberem que Aang era o Avatar. Inspirada pelos forasteiros por ajudarem a salvar sua aldeia do Príncipe Zuko, ela e os outros Guerreiros Kyoshi deixaram a ilha para ajudar o Reino da Terra a lutar contra a Nação do Fogo. Durante sua jornada, ela protegeu o bisão do céu perdido do Avatar, Appa, de cair nas mãos do inimigo, mas ela e os outros Guerreiros Kyoshi foram derrotados pela Princesa Azula, Mai e Ty Lee.';
const imageLin = '../../src/assets/Lin-1.webp';
const titleLin = 'Lin Beifong';
const descLin = 'Lin Beifong é Chefe de Polícia do Departamento de Polícia da Cidade da República, filha de Toph Beifong e Kanto, e meia-irmã materna mais velha de Suyin Beifong. Embora sua mãe tenha ensinado a encarnação anterior do Avatar Korra como dobrar a terra, Lin não demonstrou afeto por ela quando se conheceram. No entanto, os sentimentos de Lin em relação ao jovem Avatar mudaram quando Amon e seus Equalistas fizeram sua aparição pública e desafiaram abertamente os dominadores do mundo. Lin é corajosa, leal e está disposta a se sacrificar para fazer o que acredita ser certo.';
const titleKuvira = 'Kuvira';
const imageKuvira = '../../src/assets/Kuvira-1.webp';
const descKuvira = 'Kuvira é um mestre dobrador de metal que serviu como líder político e militar do Reino da Terra e do Império da Terra entre 171 e 174 D.G. Antes de sua ascensão ao poder, ela foi acolhida por Suyin Beifong e se tornou um membro proeminente do Clã Metal, servindo tanto como capitã da guarda em Zaofu quanto como parte da trupe de dança da cidade. Após a eclosão da anarquia no Reino da Terra após o assassinato da Rainha da Terra Hou-Ting, Kuvira deixou o Clã Metal e ganhou a confiança dos líderes mundiais ao estabilizar Ba Sing Se e foi nomeado líder provisório da nação.';
const titleSuyin = 'Suyin Beifong';
const imageSuyin = '../../src/assets/Suyin-1.webp';
const descSuyin = 'Suyin Beifong é a fundadora e líder de Zaofu, a filha mais nova de Toph Beifong e a meia-irmã materna mais nova de Lin. Ela é uma poderosa dobradora de metal, além de uma dançarina habilidosa e ágil. Suyin tem um casamento feliz com um arquiteto chamado Baatar, com quem tem cinco filhos; ela considera a família de extrema importância.';
const voltar = () => {
  router.go(-1);
}
</script>
