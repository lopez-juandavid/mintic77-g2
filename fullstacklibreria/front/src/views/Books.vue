<template>
    <v-app id="inspire">
        <div
        class="d-flex flex-wrap justify-space-around mb-6"
        flat
        file
        >
            <div class="pa-2" v-for="item, i in arrayCard" :key="i">
                <Card :infoCard=arrayCard[i] />
            </div>
        </div>
    </v-app>
</template>
 
<script>
import Card from "../components/Card.vue"
import { getAll } from "../services/BooksServices";
export default {
    name: 'InfoCard',

    components: {
        Card,
    },

    data: () => ({
        arrayCard: [],
    }),
    mounted () {
      getAll()
        .then( (response) => {
          this.arrayCard = response.data;
        })
        .catch( (error) => console.error(error));
    }
}
</script>