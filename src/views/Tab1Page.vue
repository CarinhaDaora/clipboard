<template>
  <ion-page id="tudo">
    <ion-header>
      <ion-toolbar id="header">
        <ion-title id="title">Página do Clipboard</ion-title>

        <ion-item fill="outline">
          <ion-label position="stacked">Digite</ion-label>
          <ion-input placeholder="Sou poggers..."></ion-input>
        </ion-item>

        <ion-button color="danger">Copiar</ion-button>


        <ion-item id="label" fill="outline">
          <ion-label position="stacked">Colar</ion-label>
          <ion-input placeholder="Cole seu texto aqui..."></ion-input>
        </ion-item>

        <ion-button color="success">Colar</ion-button>
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
#tudo{
  padding: 100px;
  width: 900px;
  margin: 0 auto;
}
#header{
  text-align: center;
}
#label{
  margin-top:  40px;
}

#title{
  margin-bottom: 40px;
}
</style>
