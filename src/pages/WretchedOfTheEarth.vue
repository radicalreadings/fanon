<script setup lang="ts">
import SessionHero from '@/components/session/SessionHero.vue'
import CoverImage from '@/components/session/CoverImage.vue'
import QrCode from '@/components/QrCode.vue'

// Canonical URL, not window.location - so the QR is correct even if this
// page is ever loaded from localhost/preview.
const PAGE_URL = 'https://radicalreadings.github.io/fanon/'

const wretchedCovers = [
  'covers/wote/1056377_FanonF_Wretched.webp',
  'covers/wote/16995WretchedoftheEarth60thAnn.jpg',
  'covers/wote/A1Zskmdej7L._AC_UF1000,1000_QL80_.jpg',
  'covers/wote/4819967_Wretched-of-the-Earth-9780802150837_COV.webp',
]
</script>

<template>
  <SessionHero title="The Wretched of the Earth" author="Frantz Fanon" />

  <v-container class="page-section">
    <p class="section-caption">Start with this video interview</p>
    <div class="video-embed">
      <iframe
        src="https://www.youtube-nocookie.com/embed/pm9xDMGIy_c"
        title="Video interview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </v-container>

  <v-container class="page-section page-section-rule">
    <v-row>
      <v-col cols="12" sm="5" md="4">
        <CoverImage :sources="wretchedCovers" alt="The Wretched of the Earth - cover editions" />
      </v-col>
      <v-col cols="12" sm="7" md="8">
        <h2 class="section-heading">Wretched of the Earth</h2>
        <p>(selected chapters)</p>
        <!-- Placeholder structure - swap in real page numbers/notes once picked -->
        <ul class="point-list">
          <li><span class="point-number">1</span><span class="point-line" /></li>
          <li><span class="point-number">3</span><span class="point-line" /></li>
          <li><span class="point-number">5</span><span class="point-line" /></li>
        </ul>
        <p class="note-line"><span class="note-label">Note:</span><span class="point-line" /></p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="page-section page-section-rule">
    <v-row align="end">
      <v-col cols="12" sm="7" md="8">
        <h2 class="section-heading">Location</h2>
        <p class="location-line"><span class="point-line" /></p>
        <p class="location-line"><span class="point-line" /></p>
      </v-col>
      <v-col cols="12" sm="5" md="4" class="d-flex justify-sm-end">
        <QrCode :value="PAGE_URL" label="QR to this page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.page-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.page-section-rule {
  border-top: 1px solid rgba(var(--v-theme-on-background), 0.15);
}
.section-caption {
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: rgb(var(--v-theme-on-background));
}
.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 2px solid rgb(var(--v-theme-primary));
}
.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.section-heading {
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  font-size: 1.4rem;
}
.point-list {
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  font-family: var(--font-body);
  font-size: 1.05rem;
}
.point-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(var(--v-theme-on-background), 0.15);
}
.point-number {
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}
.point-line {
  flex: 1;
  height: 1px;
  background-color: rgba(var(--v-theme-on-background), 0.3);
}
.note-line,
.location-line {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem;
  font-family: var(--font-body);
  font-size: 1.05rem;
}
.note-label {
  font-weight: 600;
  white-space: nowrap;
}
</style>
