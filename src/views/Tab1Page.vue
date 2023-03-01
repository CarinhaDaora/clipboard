<template>
  <ion-page id="tudo">
    <ion-header>
      <ion-toolbar id="header">
        <ion-title id="title">Página do Clipboard</ion-title>

        <ion-item fill="outline">
          <ion-label position="stacked">Digite</ion-label>
          <ion-input v-model="text" placeholder="Escreva o texto"></ion-input>
        </ion-item>

        <ion-button @click="copy" color="danger">Copiar</ion-button>

        <ion-item id="label" fill="outline">
          <ion-label position="stacked">Colar</ion-label>
          <ion-input placeholder="Cole seu texto aqui..."></ion-input>
        </ion-item>

      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { clipboardComposable } from "@/composable/clipboardComposable";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab1Page",

  data() {
    return {
      text: "estou testando agora"
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.text)
    }
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  },
  setup() {
    const { writeToClipboard, checkClipboard } = clipboardComposable();
    return { writeToClipboard, checkClipboard };
  },
});
</script>

<style>
#tudo {
  padding: 100px;
  width: 900px;
  margin: 0 auto;
}
#header {
  text-align: center;
}
#label {
  margin-top: 40px;
}

#title {
  margin-bottom: 40px;
}
</style>
