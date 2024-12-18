import { ref, onMounted, onUnmounted } from 'vue';

export function useZoomEffect(interval = 2000, zoomDuration = 1000) {
  const isZoomed = ref(false); // Reaktivní stav

  let zoomInterval = null; // Uchovává interval

  onMounted(() => {
    // Nastav interval
    zoomInterval = setInterval(() => {
      isZoomed.value = true; // Zapni zoom
      setTimeout(() => {
        isZoomed.value = false; // Vypni zoom po zoomDuration
      }, zoomDuration);
    }, interval);
  });

  onUnmounted(() => {
    // Vyčisti interval při odmountování komponenty
    clearInterval(zoomInterval);
  });

  return isZoomed; // Vrací reaktivní hodnotu
}
