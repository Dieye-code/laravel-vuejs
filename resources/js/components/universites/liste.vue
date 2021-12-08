<template lang="">
    <div>
        <h1>Liste des universites</h1>

        <ul>
            <li v-for="universite in universites" :key="universite.id">
                {{ universite.nom }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "Basic",
  props: {
    universites: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
