<script setup lang="ts">
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
  <v-container class="hero">
    <h1 class="hero-title">The Wretched of the Earth</h1>
    <p class="hero-subtitle">
      <span>Reading Discussion</span>
      <span>10.13.26</span>
    </p>
  </v-container>

  <v-container class="page-section">
    <v-row>
      <v-col cols="12" md="4">
        <p class="intro-text">
          <b>Welcome to Radical Readings at Fitz.</b> Our first book discussion is on the 1961 masterpiece
          <em>The Wretched of the Earth</em>, by Frantz Fanon.
        </p>
        <br>
        <p class="intro-text">Our discussion will focus on a
          <a href="#selected-chapters" class="intro-link">selection of chapters</a> and an
          <a href="#interview" class="intro-link">Interview</a>
          with Mumia Abu-Jamal about Fanon. It is highly recommended you listen to the interview
          before reading.
        </p>
        <br>
        <p class="intro-text">
          <b>10.13.2026</b> at <b>6:00 PM</b> at <a href="#location" class="intro-link">Fitz</a>.
        </p>
      </v-col>
      <v-col id="interview" cols="12" md="8">
        <div class="video-embed">
          <iframe
            src="https://www.youtube-nocookie.com/embed/pm9xDMGIy_c"
            title="Video interview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container id="selected-chapters" class="page-section page-section-rule">
    <v-row>
      <v-col cols="12" sm="5" md="4">
        <CoverImage :sources="wretchedCovers" alt="The Wretched of the Earth - cover editions" />
      </v-col>
      <v-col cols="12" sm="7" md="8" class="chapters-col">
        <div class="section-heading">
          <h2>The Wretched of the Earth</h2>
          <p class="section-caption">by Frantz Fanon</p>
        </div>
        <h3 class="chapters-heading">Selected Chapters</h3>
        <ul class="point-list">
          <li>Chapter I - On Violence</li>
          <li>Chapter III - The Trials and Tribulations of National Consciousness</li>
          <li>Chapter V - Colonial War and Mental Disorders</li>
        </ul>
        <p class="note-line"><span class="note-label">Note:</span>Feel free to read the whole book!<br>Our discussion will cover these Selected Chapters and the Interview.</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="page-section page-section-rule">
    <v-row align="end">
      <v-col cols="12" sm="7" md="8">
        <h2 id="location" class="section-heading">Location</h2>
        <p class="location-line"><b>Fitz Books and Waffles</b></p>
        <p class="location-line">1462 Main St. Buffalo, NY</p>
        <br>
        <p class="location-line"><b>6PM</b> October 13, 2026</p>
        <div class="map-embed">
          <iframe
            src="https://www.google.com/maps?q=1462+Main+St,+Buffalo,+NY&output=embed"
            title="Map showing Fitz Books and Waffles, 1462 Main St., Buffalo, NY"
            loading="lazy"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="5" md="4" class="d-flex justify-sm-end">
        <QrCode :value="PAGE_URL" label="QR to this page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
.hero-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  font-size: clamp(2.25rem, 7vw, 4.25rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
}
.hero-subtitle {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin: 0.75rem 0 0;
  font-family: var(--font-label);
  font-size: clamp(1.15rem, 4vw, 1.75rem);
  color: rgba(var(--v-theme-on-background), 0.65);
}
.page-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.intro-text {
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.15rem;
  line-height: 1.5;
  color: rgb(var(--v-theme-on-background));
}
.intro-link {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
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
.chapters-col {
  display: flex;
  flex-direction: column;
}
.chapters-heading {
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 900;
  /* color: rgb(var(--v-theme-primary)); */
  font-size: 1.5rem;
}
.point-list {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  font-family: var(--font-body);
  font-size: 1.15rem;
}
.point-list li {
  padding: 0.3rem 0;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}
.point-list li::marker {
  color: rgb(var(--v-theme-primary));
}
.note-line {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 0;
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: rgb(var(--v-theme-on-background));
}
.location-line {
  margin: 0 0 0.5rem;
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: rgb(var(--v-theme-on-background));
}
.map-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 6 / 3;
  margin-top: 0.75rem;
  border: 2px solid rgb(var(--v-theme-primary));
}
.map-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.note-label {
  font-weight: 600;
  white-space: nowrap;
}
</style>
