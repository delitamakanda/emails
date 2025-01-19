import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Mail } from '@/data'

export const useMailsStore = defineStore('mails', () => {
    const selected = ref<Mail['id'] | null>(null);

    function setSelected(id: Mail['id'] | null) {
        selected.value = id;
    }

    return {
        selected,
        setSelected,
    }
})

export function useMail() {
    const mailStore = useMailsStore();
    return {
        selected: mailStore.selected,
        setSelected: mailStore.setSelected,
    };
}