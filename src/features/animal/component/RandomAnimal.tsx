import {useAnimal} from "../hook/useAnimal.ts";
import {Loading} from "../../../shared/component/Loading.tsx";

export function RandomAnimal() {
    const { animal, refresh } = useAnimal();
    if (!animal) return <Loading />
    return(
        <>
            <div className="animal-container">
                <h1><a href={animal.wikiLink}>{animal.commonName}</a></h1>
                <img src={animal.imageSrc} />
                <ul>
                    <li>Binomial name: {animal.binomialName}</li>
                    <li>Location: {animal.location}</li>
                    <li>Last record: {animal.lastRecord}</li>
                </ul>
                <p>{animal.shortDesc}</p>
                <button onClick={refresh}>Random</button>
            </div>
        </>
    );
}