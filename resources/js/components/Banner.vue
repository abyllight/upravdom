<template>
    <div class="max-w-7xl px-4 mx-auto py-10">
        <div class="h-64 md:h-[32rem] flex gap-2 overflow-x-scroll md:overflow-hidden no-scrollbar">
            <div class="w-80 md:w-2/3 flex-shrink-0 bg-red-200"></div>
            <div class="w-1/3 flex md:flex-col gap-2">
                <div class="w-80 md:w-full flex-shrink-0 md:h-1/2 bg-green-200"></div>
                <div class="w-80 md:w-full flex-shrink-0 md:h-1/2 bg-blue-200"></div>
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
