interface DateFormatOptions {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatDate = (date: Date): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as DateFormatOptions;
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export { formatDate };
