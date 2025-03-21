<script setup>
import { defineProps, ref } from "vue";
import { defineRule } from "vee-validate";
import { songsCollection } from "@/includes/firebase.js";

// data
const props = defineProps({
  song: {
    type: Object,
    required: true, // required是指這個屬性是必須的
  },
});
const showForm = ref(false);
const inSubmission = ref(false);
const showAlert = ref(false);
const alertVariant = ref("bg-blue-500");
const alertMessage = ref("Please wait! Updating the song info...");
const schema = {
  modifiedName: "required",
  genre: "alpha_spaces",
};

// methods
async function edit(values) {
  inSubmission.value = true;
  showAlert.value = true;
  alertVariant.value = "bg-blue-500";
  alertMessage.value = "Please wait! Updating the song info...";
  try {
    await songsCollection.doc(props.song.docID).update(values);
  } catch (error) {
    inSubmission.value = false;
    alertVariant.value = "bg-red-500";
    alertMessage.value = "Something went wrong. Please try again later.";
    console.log(error);
    return;
  }
  inSubmission.value = false;
  alertVariant.value = "bg-green-500";
  alertMessage.value = "Success!";
}

// vee-validate
defineRule("required", (value) => {
  if (!value) return "This field is required";
  return true;
});
defineRule("alpha_spaces", (value) => {
  if (!value) return "This field must have letters and spaces";
  return true;
});
</script>
<template>
  <!-- Composition Items -->
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modifiedName }}</h4>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
        @click.prevent="showForm = !showForm"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="showForm">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-if="showAlert"
        :class="alertVariant"
      >
        {{ alertMessage }}
      </div>
      <vee-form
        :validation-schema="schema"
        :initial-values="song"
        @submit="edit"
      >
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Song Title"
            name="modifiedName"
          />
          <ErrorMessage class="text-red-600" name="modifiedName" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field
            type="text"
            name="genre"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Genre"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button
          type="submit"
          class="py-1.5 px-3 rounded text-white bg-green-600"
          :disabled="inSubmission"
        >
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          :disabled="inSubmission"
          @click.prevent="showForm = false"
        >
          Go Back
        </button>
      </vee-form>
    </div>
  </div>
</template>

<style></style>
