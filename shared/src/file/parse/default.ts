import { DemoMeta } from "../../demo";
import { parseCommentMeta } from "./comment";

export async function parseDefault(rawContent: string): Promise<ParseResult> {
    return {
        code: rawContent,
        docMeta: parseCommentMeta(rawContent)
    }
}

export interface ParseResult {
    code: string;
    docMeta: DemoMeta
}