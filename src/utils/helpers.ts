export const mailTo = (to: string) => {
    // @ts-ignore
    window.location = 'mailto:' + to
}
