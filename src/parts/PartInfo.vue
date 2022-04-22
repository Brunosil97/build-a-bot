<template>
    <div>
        <h1>{{parts.title}}</h1>
        <div>
            {{parts.description}}
        </div>
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    parts() {
      const { partType, id } = this;

      return parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
