<template>
    <div>
        <Button v-for="nav in navs" :key="nav.id" size="base" class="ml-8">
            {{ nav.text }}
        </Button>
    </div>
</template>

<script>
import Button from "@/components/atoms/button";
export default {
    name: "Navigations",
    props: ["navs"],
    components: { Button }
};
</script>
