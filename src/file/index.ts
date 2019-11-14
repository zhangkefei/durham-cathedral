export class File {
    constructor() {

    }

    static createAndDownloadFile(fileName: string, content: any) {
        let aTag = document.createElement('a')
        let blob = new Blob([content])
        aTag.download = fileName
        aTag.href = URL.createObjectURL(blob)
        aTag.click()
        URL.revokeObjectURL(blob)
    }
}