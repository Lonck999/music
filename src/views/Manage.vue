<script setup>
import Upload from "@/components/Upload.vue";
import CompositionItem from "@/components/Compositionltem.vue";
import { songsCollection, auth } from "@/includes/firebase";
import { ref } from "vue";

const songs = ref([]);

async function getSongs() {
  const snapshot = await songsCollection
    .where("uid", "==", auth.currentUser.uid)
    .get();
  snapshot.forEach((document) => {
    const song = {
      docID: document.id,
      ...document.data(),
    };
    songs.value.push(song);
  });
}

getSongs();
</script>

<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <Upload ref="refUpload" />
      </div>
      <div class="col-span-2">
        <div
          class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <CompositionItem
              v-for="song in songs"
              :key="song.docID"
              :song="song"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
