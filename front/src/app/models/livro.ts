export interface Livro {
    id: number;
    titulo: string;
    subtitulo?: string | null;
    autor?: string | null;
    editora?: string | null;
    isbn?: string | null;
    descricao?: string | null;
    idioma?: string | null;
    ano?: number | null;
    paginas?: number | null;
    preco?: number | null;
    estoque?: number | null;
    desconto?: string | null;
    disponivel?: boolean | null;
    dimensoes?: number | null;
    peso?: number | null;
}
