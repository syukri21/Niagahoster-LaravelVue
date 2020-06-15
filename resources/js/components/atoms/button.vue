<template>
    <button
        v-bind:class="classObject"
        class="text-primary focus:outline-none cursor-pointer"
        v-bind="$props"
    >
        <faw-icon class="mr-2" v-if="icon" :icon="icon"></faw-icon><slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
    props: ["icon", "type", "size"],
    computed: {
        classObject() {
            const size = `text-${this.size || "sm"}`;

            return `${size}`;
        }
    }
};
</script>
