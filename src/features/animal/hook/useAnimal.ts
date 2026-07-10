import {useEffect, useState} from "react";
import {getRandomAnimal} from "../service/animal.service.ts";
import type {Animal} from "../interface/animal.interface.ts";

export function useAnimal() {
    const [animal, setAnimal] = useState<Animal | null>();

    async function refresh() {
        const animal: Animal = await getRandomAnimal();
        setAnimal(animal);
    }

    useEffect(() => {
        refresh();
    }, []);

    return { animal, refresh };
}