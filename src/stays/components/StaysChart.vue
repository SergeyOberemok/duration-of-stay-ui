<script setup>
import * as d3 from 'd3'
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  stays: {
    type: Array,
    required: true,
  },
})

const data = [...props.stays]
const width = 900
const height = 300

onMounted(() => {
  const svg = updateSvg()
  const scaleX = createScaleX()
  const scaleY = createScaleY()
  const scaleColor = createScaleColor()

  const g = svg.append('g')
  const groups = g
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'dataRect')
    .attr('transform', (d, i) => `translate(0, ${scaleY(i)})`)

  groups.each(function (d, i) {
    const group = d3.select(this)

    appendRect(group, d, i, scaleX, scaleY, scaleColor)
  })
})

function updateSvg(params) {
  const svg = d3
    .select('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])

  return svg
}

function createScaleX() {
  const minTimestamp = d3.min(data, (d) => d.startDate.getTime())
  const maxTimestamp = d3.max(data, (d) => d.endDate.getTime())

  const x = d3.scaleLinear().domain([minTimestamp, maxTimestamp]).range([0, width])

  return x
}

function createScaleY() {
  const y = d3.scaleBand().domain(d3.range(data.length)).range([0, height]).padding(0.1)

  return y
}

function createScaleColor() {
  return d3.scaleOrdinal(d3.schemeSet2).domain(data)
}

function appendRect(group, d, i, scaleX, scaleY, scaleColor) {
  const startX = scaleX(d.startDate.getTime())
  const endX = scaleX(d.endDate.getTime())

  group
    .append('rect')
    .attr('x', startX)
    .attr('y', 0)
    .attr('width', endX - startX)
    .attr('height', scaleY.bandwidth())
    .attr('fill', scaleColor(d))
}
</script>

<template>
  <h3>Charts</h3>
  <svg></svg>
</template>
