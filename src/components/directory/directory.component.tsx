import { Key } from "react";

import DirectoryItem from "../directory-item/directory-item.component";
import categories from "./categories.json";

import { DirectoryContainer } from "./directory.styles";

export type DirectoryCategory = {
    id: Key;
    title: string;
    imageUrl: string;
    route: string;
};

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
