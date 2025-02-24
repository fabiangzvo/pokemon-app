<template>
    <DataView :value="items" layout="list" :lazy="true" :rows="10" :onLazyLoad="handleLoadMore" dataKey="url" class="w-full">
    <template #list="slotProps">
        <ul class="flex flex-col w-full gap-y-3">
            <li v-for="(item, index) in slotProps.items" :key="index" class="flex justify-between px-5 w-full h-[60px] bg-white dark:bg-black gap-y-5">
                <p>{{ item.name }}</p>
                <Button icon="pi pi-star" severity="secondary" aria-label="detail" rounded/>
            </li>
        </ul>
    </template>
</DataView>
</template>

<script setup lang="ts">
interface ListProps {
    items:any[]
    total: number
    handleLoadMore?: () => Promise<void>
}

defineProps<ListProps>()
</script>

<style scoped>

</style>