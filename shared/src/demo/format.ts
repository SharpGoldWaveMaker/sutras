import { pascalCase } from "../utils";

export function getDemoInjectSymbol(name: string){
    return `$${pascalCase(name)}DemoInjectKey`
}

export function getPageInjectSymbol(){
    return `PageDataInjectKey`
}