<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open" @keypress="collapse">&#x25B2;
                Collapse
            </span>
            <span v-if="!open" @click="open = !open" @keypress="expand">&#x25BC;
                Expand
            </span>
        </div>
        <slot v-if="open">

        </slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsabileSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
.header {
    background-color: gray;
    padding: 3px;
    cursor: pointer;
}
</style>
