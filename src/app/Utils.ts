
export function convertToUpper(input: string): string{
    return input.toUpperCase()
}

export function getStringInfo(arg: string): StringInfo{
    return {
        lower: arg.toLowerCase(),
        upper: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        metedata: {}
    }
}

export type StringInfo = {
    lower: string,
    upper: string,
    characters: string[],
    length: number,
    metedata: Object | undefined
}