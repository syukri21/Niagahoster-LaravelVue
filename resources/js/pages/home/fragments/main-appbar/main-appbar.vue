<template>
    <div class="py-4 border-b border-gray-200">
        <Container>
            <div class="flex justify-between">
                <div></div>
                <Navigations :navs="navs"></Navigations>
            </div>
        </Container>
    </div>
</template>

<script>
import Container from "@/components/atoms/container";
import Navigations from "./navigations";

export default {
    name: "MainAppbar",
    data() {
        return {
            navs: [
                { id: 1, text: "Hosting", to: "/" },
                { id: 3, text: "Domain", to: "/" },
                { id: 4, text: "Server", to: "/" },
                { id: 5, text: "Afiliasi", to: "/" },
                { id: 6, text: "Promo", to: "/" },
                { id: 7, text: "Pembayaran", to: "/" },
                { id: 8, text: "Review", to: "/" },
                { id: 9, text: "Kontak", to: "/" },
                { id: 10, text: "Blog", to: "/" }
            ]
        };
    },
    components: {
        Container,
        Navigations
    }
};
</script>
