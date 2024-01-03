export function validFileType(file:File, fileTypes: string[]) {

    const loadFileType = fileTypes.find(type => file.type === type);

    return !!loadFileType;
}