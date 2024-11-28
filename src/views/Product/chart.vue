<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { Chart } from 'chart.js';

    const chartCanvas = ref(null);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Example labels
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    onMounted(() => {
      if (chartCanvas.value) {
        new Chart(chartCanvas.value, {
          type: 'line', // Choose your chart type (e.g., 'line', 'bar', etc.)
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          },
        });
      }
    });
</script>

<style scoped>
canvas {
  max-width: 800px;
  margin: auto;
}
</style>
