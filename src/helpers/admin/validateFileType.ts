export function validFileType(file:File, fileTypes: string[]) {

    const loadFileType = fileTypes.find(type => file.type === type);

    console.log("loadFileType" + loadFileType);
    console.log("fileTypes " + fileTypes);
    console.log("file.type " + file.type);

    return !!loadFileType;
}