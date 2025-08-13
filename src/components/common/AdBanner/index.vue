<template>
  <div class="ad-banner-container" v-if="showAd">
    <div class="ad-banner-wrapper">
      <!-- Google AdSense Banner Ad -->
      <ins class="adsbygoogle ad-banner"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXX"
           :data-ad-slot="adSlot"
           :data-ad-format="adFormat"
           data-full-width-responsive="true"></ins>
    </div>
    
    <!-- Close button for better UX -->
    <button 
      v-if="closeable" 
      @click="closeAd" 
      class="ad-close-btn"
      title="Close Ad"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  adSlot?: string
  adFormat?: string
  closeable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  adSlot: 'XXXXXXXXX', // Default ad slot
  adFormat: 'auto',
  closeable: true
})

const showAd = ref(true)

const closeAd = () => {
  showAd.value = false
}

onMounted(() => {
  nextTick(() => {
    if (showAd.value) {
      try {
        // Initialize Google AdSense
        ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      } catch (error) {
        console.log('AdSense initialization error:', error)
      }
    }
  })
})
</script>

<style scoped>
.ad-banner-container {
  position: relative;
  margin: 16px 0;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.ad-banner-wrapper {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-banner {
  max-width: 100%;
}

.ad-close-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  transition: background-color 0.2s;
}

.ad-close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Dark mode support */
.dark .ad-banner-container {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.1);
}
</style>