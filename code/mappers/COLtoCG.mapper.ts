import { ComicOnList } from "../models/ComicOnList.model";
import { ComicGeneral } from "../models/comicGeneral.model";

export function colToCgMapper(source: ComicGeneral): ComicOnList {
    const target: ComicOnList = {
        title: source.title,
        image: source.img,
        description: source.transcript
    }

    return target;
}