import { DemoMeta } from "../../demo";
import { parseCommentMeta } from "./comment";

export async function parseDefault(rawContent: string): Promise<ParseBasicResult> {
    return {
        code: rawContent,
        docMeta: parseCommentMeta(rawContent)
    }
}

export interface ParseBasicResult {
    code: string;
    docMeta: DemoMeta;
    /**
     * @name 文档内容
     */
    docContent?: string
}