<template>
  <v-layout>
    <v-app-bar
      color="primary"
      density="compact">
      <v-app-bar-title>Avatar Project</v-app-bar-title>
    </v-app-bar>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "NavbarComponent",
});
</script>

<style scoped>
.v-toolbar-title.v-app-bar-title {
  color: #871616;
}
</style>
