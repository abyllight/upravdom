<template>
    <div class="max-w-7xl px-4 mx-auto py-10">
        <div class="h-auto md:h-[32rem] flex gap-2 overflow-x-scroll md:overflow-hidden no-scrollbar">
            <div class="w-80 md:w-2/3 flex-shrink-0 bg-gray-100">
                <img src="/images/banner/1.png">
            </div>
            <div class="w-1/3 flex md:flex-col gap-2">
                <div class="w-80 md:w-full flex-shrink-0 bg-gray-100">
                    <img src="/images/banner/2.png">
                </div>
                <div class="w-80 md:w-full flex-shrink-0 bg-gray-100">
                    <img src="/images/banner/3.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
