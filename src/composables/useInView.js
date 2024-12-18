import { ref, onMounted, onUnmounted } from 'vue';

export function useInView(elementRef) {
  const isInView = ref(false); // Reaktivní stav

  let observer; // Uchováváme instanci IntersectionObserveru

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        isInView.value = entry.isIntersecting; // Aktualizujeme stav
      },
      {
        rootMargin: "-23% 0px -23% 0px",
        threshold: 0.1,
      }
    );

    if (elementRef.value) {
      observer.observe(elementRef.value); // Sledujeme element
    }
  });

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value); // Zastavíme sledování
    }
  });

  return isInView;
}
