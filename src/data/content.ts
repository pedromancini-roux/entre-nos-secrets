/**
 * ─────────────────────────────────────────────────────────────
 * CONTEÚDO DO SITE — edite APENAS este arquivo para trocar tudo.
 * A interface se adapta automaticamente à quantidade de itens.
 *
 * Para adicionar um item novo: copie um bloco existente,
 * mude o `id` (precisa ser único) e escreva o texto.
 * `body` é uma lista de parágrafos.
 * ─────────────────────────────────────────────────────────────
 */

export type Entry = {
  id: string;
  /** etiqueta pequena, tipo código de arquivo: "REG. 01" */
  ref: string;
  title: string;
  /** linha discreta de contexto: data, lugar, hora */
  meta?: string;
  body: string[];
  /** nota manuscrita na margem (use com parcimônia) */
  margin?: string;
  /** só usado em "ainda não aconteceu" */
  locked?: boolean;
};

export const site = {
  name: "Entre Nós",
  her: "Júlia",
  openingLine:
    "Eu fiz um lugar para guardar algumas coisas que não cabiam em uma conversa.",
  enter: "entrar",
};

/* ── ARQUIVO ───────────────────────────────────────────────── */
export const arquivo: Entry[] = [
  {
    id: "a1",
    ref: "REG. 01",
    title: "uma coisa que pensei e nunca te contei",
    meta: "arquivado sem data",
    body: [
      "[escreva aqui aquilo que você pensou em silêncio e nunca disse em voz alta]",
      "[um segundo parágrafo, se precisar]",
    ],
    margin: "[nota na margem]",
  },
  {
    id: "a2",
    ref: "REG. 02",
    title: "um detalhe seu que ficou comigo",
    meta: "observado várias vezes",
    body: ["[descreva o detalhe exatamente como ele acontece]"],
  },
  {
    id: "a3",
    ref: "REG. 03",
    title: "uma conversa que eu ainda lembro",
    meta: "transcrição incompleta",
    body: [
      "[escreva aqui o que foi dito, ou só o pedaço que sobrou na memória]",
    ],
  },
  {
    id: "a4",
    ref: "REG. 04",
    title: "uma coisa que mudou depois de você",
    body: ["[escreva aqui o que é diferente agora]"],
  },
  {
    id: "a5",
    ref: "REG. 05",
    title: "um momento específico",
    meta: "hora aproximada",
    body: ["[escreva aqui o momento, com o máximo de detalhe possível]"],
  },
  {
    id: "a6",
    ref: "REG. 06",
    title: "uma coisa que eu quero lembrar para sempre",
    body: ["[escreva aqui]"],
  },
];

/* ── COISAS QUE GUARDEI ────────────────────────────────────── */
export const guardei: Entry[] = [
  {
    id: "g1",
    ref: "01",
    title: "o jeito que você fala quando está com vergonha",
    body: ["[descreva como é — a voz, o rosto, o que você faz enquanto olha]"],
  },
  {
    id: "g2",
    ref: "02",
    title: "uma palavra que você sempre usa",
    body: ["[a palavra, e por que ela virou sua]"],
    margin: "[a palavra]",
  },
  {
    id: "g3",
    ref: "03",
    title: "uma coisa que você me contou uma vez",
    body: ["[escreva aqui, do jeito que ela contou]"],
  },
  {
    id: "g4",
    ref: "04",
    title: "um jeito seu que eu acho bonito",
    body: ["[escreva aqui]"],
  },
  {
    id: "g5",
    ref: "05",
    title: "algo que você faz sem perceber",
    body: ["[escreva aqui]"],
  },
];

/* ── AINDA NÃO ACONTECEU ───────────────────────────────────── */
/** troque `locked: false` quando a memória finalmente existir */
export const aindaNao: Entry[] = [
  {
    id: "f1",
    ref: "—",
    title: "primeira foto juntos",
    locked: true,
    body: ["[escreva o que você imagina desse momento]"],
  },
  {
    id: "f2",
    ref: "—",
    title: "primeiro abraço",
    locked: true,
    body: ["[escreva aqui]"],
  },
  {
    id: "f3",
    ref: "—",
    title: "primeira viagem",
    locked: true,
    body: ["[escreva aqui]"],
  },
  {
    id: "f4",
    ref: "—",
    title: "um lugar que ainda vamos conhecer",
    locked: true,
    body: ["[escreva aqui]"],
  },
  {
    id: "f5",
    ref: "—",
    title: "uma memória que ainda não existe",
    locked: true,
    body: ["[escreva aqui]"],
  },
];

/* ── PARA LER (cartas) ─────────────────────────────────────── */
export const cartas: Entry[] = [
  {
    id: "c1",
    ref: "CARTA I",
    title: "para quando sentir saudade",
    meta: "abrir só quando precisar",
    body: [
      "[escreva aqui a carta]",
      "[quantos parágrafos você quiser]",
    ],
  },
  {
    id: "c2",
    ref: "CARTA II",
    title: "uma coisa que eu precisava te dizer",
    body: ["[escreva aqui a carta]"],
  },
  {
    id: "c3",
    ref: "CARTA III",
    title: "sobre você",
    body: ["[escreva aqui a carta]"],
  },
  {
    id: "c4",
    ref: "CARTA IV",
    title: "sobre nós",
    body: ["[escreva aqui a carta]"],
  },
  {
    id: "c5",
    ref: "CARTA V",
    title: "uma carta para o futuro",
    meta: "não abrir agora",
    body: ["[escreva aqui a carta]"],
  },
];

/* ── ENTRE NÓS ─────────────────────────────────────────────── */
/**
 * Área experimental: cada fragmento pode ser uma frase, uma piada
 * interna, uma música, um texto curto ou uma imagem.
 * Para imagem: coloque o arquivo em src/assets e importe aqui,
 * passando o import em `image`.
 */
export type Fragment = {
  id: string;
  kind: "frase" | "referência" | "música" | "acontecimento" | "imagem";
  text: string;
  detail?: string;
  /** URL ou import de imagem (opcional) */
  image?: string;
};

export const fragmentos: Fragment[] = [
  { id: "e1", kind: "referência", text: "[uma referência que só nós dois entendemos]", detail: "[explique — ou não]" },
  { id: "e2", kind: "frase", text: "[uma frase que virou nossa]" },
  { id: "e3", kind: "música", text: "[música]", detail: "[por que essa]" },
  { id: "e4", kind: "acontecimento", text: "[um acontecimento pequeno e específico]" },
  { id: "e5", kind: "frase", text: "[uma piada interna]" },
  { id: "e6", kind: "referência", text: "[um apelido, um número, uma hora do dia]" },
  { id: "e7", kind: "acontecimento", text: "[algo que aconteceu e ninguém mais viu]" },
];
