<script setup lang="ts">
import SessionHero from '@/components/session/SessionHero.vue'
import MeetingDetailsCard from '@/components/session/MeetingDetailsCard.vue'
import BookInfoCard from '@/components/session/BookInfoCard.vue'
import SupplementalLinksList from '@/components/session/SupplementalLinksList.vue'

// Fill these in as details firm up.
const links: { label: string; url: string; description?: string }[] = []
</script>

<template>
  <SessionHero title="The Wretched of the Earth" author="Frantz Fanon" />
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" md="7">
        <!-- BookInfoCard props: synopsis, publisher, published-year, page-count, isbn -->
        <BookInfoCard />

        <!-- Add a "Discussion Questions" or "Notes" section directly here
             (a <h2> plus a <v-list> or <p>) once there's something to put in it. -->
      </v-col>
      <v-col cols="12" md="5">
        <!-- MeetingDetailsCard props: date, time, timezone, location, location-url, facilitator -->
        <MeetingDetailsCard class="mb-6" />
        <SupplementalLinksList :links="links" />
      </v-col>
    </v-row>
  </v-container>
</template>
