import { atom, selector } from 'recoil'

type CellType = 'empty' | 'black' | 'white'

const blackIsAI = atom({
  key: 'blackIsAI',
  default: false,
})

const whiteIsAI = atom({
  key: 'whiteIsAI',
  default: true,
})

const state = atom<CellType[][]>({
  key: 'state',
  default: Array.from({ length: 8 }, () => Array(8).fill('empty')),
})

const blackScore = selector({
  key: 'blackScore',
  get: ({ get }) =>
    get(state).filter((row) => row.every((cell) => cell === 'black')).length,
})

const whiteScore = selector({
  key: 'whiteScore',
  get: ({ get }) =>
    get(state).filter((row) => row.every((cell) => cell === 'white')).length,
})

const eatCountMatrixForBlack = selector({
  key: 'eatCountMatrixForBlack',
  get: ({ get }) =>
    get(state).map((row) => row.map((cell) => (cell === 'black' ? 1 : 0))),
})

const eatCountMatrixForWhite = selector({
  key: 'eatCountMatrixForWhite',
  get: ({ get }) =>
    get(state).map((row) => row.map((cell) => (cell === 'white' ? 1 : 0))),
})

const thinking = atom({
  key: 'thinking',
  default: false,
})

const blackTurn = atom({
  key: 'blackTurn',
  default: true,
})

const received = atom({
  key: 'received',
  default: '',
})

const searchDepth = atom({
  key: 'searchDepth',
  default: 1,
})

const searchBreadth = atom({
  key: 'searchBreadth',
  default: 1,
})

const latestPlacing = atom<[number, number] | null>({
  key: 'latestPlacing',
  default: null,
})

export const P = {
  blackIsAI,
  whiteIsAI,
  blackTurn,
  state,
}
