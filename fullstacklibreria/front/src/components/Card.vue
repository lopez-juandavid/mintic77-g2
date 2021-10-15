<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=infoCard.image_url
      height="200px"
    ></v-img>

    <v-card-title>
      {{ infoCard.book_name }}
    </v-card-title>

    <v-card-subtitle>
      {{ infoCard.book_author }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más info <!-- AGREGAR ENLACE AL LIBRO -->
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ infoCard.book_description }}
          <p>
            ${{ infoCard.book_price }}
          </p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
      name: 'Card',
    data: () => ({
      show: false,
    }),
    props: [
        'infoCard',
    ]
  }
</script>