<template>
    <div class="py-6 px-3 max-w-7xl mx-auto flex items-center justify-between">
        <div>
            <a class="flex items-center gap-2 cursor-pointer">
                <img src="/images/location.svg" class="w-7"/>
                <p class="hidden md:block">Алматы</p>
            </a>
        </div>
        <router-link to="/" class="cursor-pointer">
            <img :src="logo" class="w-8 md:w-28">
        </router-link>
        <div>
            <a class="flex items-center gap-3 cursor-pointer" href="tel:+77019103491">
                <img src="/images/phone.svg" class="w-7"/>
                <p class="text-lg hidden md:block">+7 (701) 910 34 91</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
        logo_sm: '/images/icon.png',
        logo_lg: '/images/logo3.png'
    }),
    computed:{
        logo(){
            return window.innerWidth <= 425 ? this.logo_sm : this.logo_lg
        }
    }
}
</script>
