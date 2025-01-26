import { useEmailStore } from '@/store/emailStore';

export function useEmails() {
    const emailStore = useEmailStore();
    return {
        selected: computed(() => emailStore.selected),
        setSelected: emailStore.setSelected,
    }
}