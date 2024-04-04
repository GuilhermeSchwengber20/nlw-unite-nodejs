export function generateSlug(texto: string): string {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9 -]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
}
