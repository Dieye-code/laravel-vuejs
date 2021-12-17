<template lang="html">

    <div class="card m-5">
      <div class="card-body">
        <div class="card">
          <div class="card-header">Liste des Universités</div>
          <div class="card-body text-black-50">
            <table class="table table-bordered ">
              <tr>
                <th>ID</th>
                <th>Libelle</th>
              </tr>
              <tr v-for="universite in universites" :key="universite.id">
                <td>{{ universite.id }}</td>
                <td>{{ universite.nom }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
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
<style lang="css">

  .table{
    color: gray;
  }

  .card-header{
    background: rgb(54, 141, 212);;
  }

</style>
