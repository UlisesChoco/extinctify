import { api } from "../../../shared/api/api.ts";
import type { Animal } from "../interface/animal.interface.ts";

function fixWikiImageUrl(imageSrc: string): string {
    imageSrc = imageSrc.replace("/commons/thumb/", "/commons/");

    const lastSlash = imageSrc.lastIndexOf("/");
    return imageSrc.substring(0, lastSlash);
}

export async function getRandomAnimal(

): Promise<Animal> {
    const response: Response = await api("/animal/");
    const animal: Animal = await response.json()
        .then((value) => value.data[0]);
    animal.imageSrc = fixWikiImageUrl(animal.imageSrc);
    return animal;
}