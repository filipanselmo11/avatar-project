<template>
  <NavbarComponent />
  <div id="agua-page" class="mt-16 ml-5">
    <v-btn class="mt-2" color="orange" density="compact" variant="flat" @click="voltar()">
      <span>
        Voltar
      </span>
    </v-btn>
    <h2 class="text-h2 mt-10 text-center">
      Tribo da Água
    </h2>
    <div class="mt-9">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageKatara"
            :color="aguaColor"
            :titulo="titleKatara"
            :descricao="descKatara"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageSokka"
            :color="aguaColor"
            :titulo="titleSokka"
            :descricao="descSokka"/>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageKorra"
            :color="aguaColor"
            :titulo="titleKorra"
            :descricao="descKorra"
          />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageTonraq"
            :color="aguaColor"
            :titulo="titleTonraq"
            :descricao="descTonraq"
          />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageSenna"
            :color="aguaColor"
            :titulo="titleSenna"
            :descricao="descSenna"
          />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageUnalaq"
            :color="aguaColor"
            :titulo="titleUnalaq"
            :descricao="descUnalaq"
          />
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <DialogComponent
            :image="imageVarrick"
            :color="aguaColor"
            :titulo="titleVarrick"
            :descricao="descVarrick"
          />
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
const aguaColor = '#365598';
const imageKatara = '../../src/assets/katara-2.webp';
const titleKatara = 'Katara';
const descKatara = 'Katara é uma mestre dominadora de água, nascida na Tribo da Água do Sul, filha do Chefe Hakoda e sua esposa Kya. Durante sua infância, ela foi a única dominadora de água que vivia na Tribo da Água do Sul. Depois de perder sua mãe em um ataque da Nação do Fogo e seu pai partir para lutar contra a Nação do Fogo na Guerra dos Cem Anos, ela foi criada por sua avó paterna, Kanna, ao lado de seu irmão mais velho, Sokka. Quando adolescente, Katara e seu irmão descobriram o jovem Avatar Nômade do Ar, Aang, que havia sido congelado em um iceberg com seu bisão, Appa, por um século. Precisando de um mestre em controle de água, os irmãos e Aang deixaram o Pólo Sul em uma jornada em direção à Tribo da Água do Norte.';
const imageSokka = '../../src/assets/Sokka-2.webp';
const titleSokka = 'Sokka';
const descSokka = 'Sokka era um guerreiro da Tribo da Água da Tribo da Água do Sul e filho do Chefe Hakoda e Kya. Após a morte de sua mãe e a partida de seu pai para a guerra, Sokka foi criado por sua avó Kanna junto com sua irmã mais nova, Katara.';
const imageKorra = '../../src/assets/korra-2.webp';
const titleKorra = 'Korra';
const descKorra = 'Korra é a encarnação atual do Avatar e sucessora imediata do Avatar Aang. Nascida e criada na Tribo da Água do Sul, onde dominou a dobra de água, a dobra de terra e a dobra de fogo, ela mais tarde se mudou para a Cidade da República para obter uma proficiência semelhante com dobra de ar sob a tutela e orientação de Tenzin, bem como para ajudá-la a superar sua aversão aos aspectos espirituais das artes de flexão. Com a ajuda do espírito de Aang, Korra ganhou a habilidade de dobrar energia e, depois de se conectar com suas vidas passadas, ganhou a capacidade de entrar no Estado Avatar à vontade, marcando sua transição para um Avatar totalmente realizado. No entanto, devido à sua separação temporária de Raava durante a Convergência Harmônica de 171 DG, ela não tem mais conexão com suas vidas passadas. Após sua batalha com Zaheer e o Red Lotus, ela passou três anos se recuperando de um trauma. Mais tarde, após derrotar Kuvira e pôr fim ao Império da Terra, Korra iniciou um relacionamento romântico com sua melhor amiga, Asami Sato.';
const imageTonraq = '../../src/assets/Tonraq-2.webp';
const titleTonraq = 'Tonraq';
const descTonraq = 'Tonraq é um poderoso mestre dominador de água e chefe da Tribo da Água do Sul. Nascido como herdeiro do chefe das Tribos da Água, ele é o irmão mais velho de Unalaq. Crescendo na Tribo da Água do Norte, Tonraq serviu como general militar do Norte em sua juventude, embora tenha sido banido e deserdado após a destruição de uma floresta espiritual sagrada em suas mãos. Ele se mudou para a Tribo da Água do Sul, onde se tornou o líder não oficial da tribo e se casou com Senna, com quem tem uma filha, Avatar Korra.';
const imageSenna = '../../src/assets/senna-2.webp';
const titleSenna = 'Senna';
const descSenna = 'Senna é uma dobradora de água que reside em Wolf Cove, na Southern Water Tribe. Ela é casada com o chefe Tonraq e juntos têm uma filha, Avatar Korra.';
const imageUnalaq = '../../src/assets/Unalaq-1.webp';
const titleUnalaq = 'Unalaq';
const descUnalaq = 'Unalaq era um mestre dominador de água, o chefe das Tribos da Água do Norte e do Sul,[3] um ex-membro do Lótus Vermelho, e o primeiro e único Avatar das Trevas. Ele era o irmão mais novo de Tonraq, marido de Malina, com quem foi pai de Desna e Eska, e tio do Avatar Korra. Um homem particularmente espiritual, ele serviu brevemente como mentor espiritual de Korra até ela descobrir o envolvimento dele no banimento de seu pai, momento em que ele foi absolvido como seu professor e rejeitado. Sem o conhecimento de ninguém, Unalaq estava trabalhando para libertar Vaatu do encarceramento no Mundo Espiritual, e teve sucesso nesta tarefa antes de se fundir com Vaatu para se tornar o Avatar das Trevas. Para este fim, Unalaq quase destruiu a Cidade da República antes de ser derrotado e morto por sua sobrinha. Mesmo que sua tentativa de destruir o Avatar e conduzir o mundo a uma era de trevas tenha sido frustrada, Unalaq conseguiu reunir humanos e espíritos e, assim, mudar o mundo para sempre.';
const imageVarrick = '../../src/assets/varrick-1.webp';
const titleVarrick = 'Varrick';
const descVarrick = 'Iknik Blackstone Varrick, mais conhecido por seu sobrenome, é um empresário bilionário excêntrico e carismático e inflexível, conhecido por sua natureza ambiciosa e extravagância. Nascido na Tribo da Água do Sul, ele é um nobre que gosta de passear pelo mundo em seu iate e exibir seu estilo de vida extravagante, muitas vezes às custas de sua ex-assistente e eventual esposa, Zhu Li. Um homem que respeita a franqueza, ele fez amizade com o honesto e sincero dobrador de terra Bolin. Mais tarde, ele planejou uma guerra civil entre as Tribos da Água do Norte e do Sul, alegando que a ocupação de seu país por Unalaq era uma ameaça à riqueza do Sul, especialmente a sua,[9] ao mesmo tempo em que promovia sua verdadeira intenção de lucrar com a escalada do conflito.[ 10] No entanto, a sua tentativa de atrair também a República Unida para a guerra levou à sua prisão.[11] No entanto, Varrick logo conseguiu escapar,[12] e se estabeleceu em Zaofu como chefe do departamento de tecnologia da cidade,[13] embora mais tarde tenha acompanhado Kuvira em sua busca para reunir o Reino da Terra.[14] Não querendo usar energia espiritual para ela, Varrick eventualmente abandonou seu exército em 174 DG[15][16] e ajudou a Equipe Avatar a impedi-la de conquistar a Cidade da República.[17] Depois que Kuvira foi derrotado, Varrick casou-se com Zhu Li, e depois que ela ganhou as eleições presidenciais, ele se tornou o Primeiro Cavalheiro da República Unida.';
const voltar = () => {
  router.go(-1);
}
</script>
