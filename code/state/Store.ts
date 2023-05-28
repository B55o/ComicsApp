import { create } from 'zustand'
import { ComicStore } from '../models/ComicStore.model'
import { ComicGeneral } from '../models/comicGeneral.model'

export const useComicStore = create<ComicStore>((set)  => ({
    comic: {
        month: "",
        num: 0,
        link: "",
        year: "",
        news: "",
        safe_title: "",
        transcript: "",
        alt: "",
        img: "",
        title: "",
        day: "",
    },

    setComic: (comic: ComicGeneral) => set({comic: comic})
}))