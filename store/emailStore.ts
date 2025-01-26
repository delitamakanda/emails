import { defineStore } from 'pinia'
import type { Mail } from '@/data'
import { mails } from '@/data'

interface EmailState {
    selected: Mail["id"] | null;
}

export const useEmailStore = defineStore('email', {
    state:(): EmailState => ({
        selected: mails[0].id,
    }),
    actions: {
        setSelected(id: Mail["id"] | null) {
            this.selected = id;
        }
    }
})