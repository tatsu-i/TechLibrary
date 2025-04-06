<script setup lang="ts">
import { Search, Star } from 'lucide-vue-next'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="container mx-auto py-8">
    <div class="flex flex-col justify-center">
      <header class="py-7">
        <h1 class="text-4xl font-semibold">TechLibrary</h1>
      </header>
      <div class="pb-6 border-b">
        <div class="relative w-full max-w-md items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-4 text-muted-foreground" />
          </span>
        </div>
      </div>
      <div class="my-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 gap-y-12">
          <div class="flex flex-col gap-1">
            <div class="overflow-hidden aspect-square">
              <img
                src="https://picsum.photos/400/400"
                alt="技術の画像"
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div class="flex justify-between mt-1 mb-2">
              <h3 class="text-sm">タイトルああああああああああ</h3>
              <Star class="size-4 text-black mt-0.5 ml-2"></Star>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">追加日: 2025/3/30</p>
            </div>
            <div>
              <p class="mb-1 text-sm text-muted-foreground">進捗: 55%</p>
              <div class="px-0.5">
                <Progress :model-value="33" />
              </div>
            </div>
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="https://picsum.photos/400/400"
              alt="技術の画像"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
