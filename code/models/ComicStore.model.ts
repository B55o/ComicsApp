import { ComicGeneral } from "./comicGeneral.model";

export interface ComicStore {
    comic: ComicGeneral;

    setComic: (comic: ComicGeneral) => void;
}