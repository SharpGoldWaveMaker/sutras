import { transformTS } from "../transform"
import { parseCommentMeta } from "./comment";
import { ParseBasicResult } from "./default";

export async function parseTS(rawContent: string): Promise<TSParseResult> {
    return {
        ts: rawContent,
        js: await transformTS(rawContent),
        docMeta: parseCommentMeta(rawContent),
        code: rawContent
    }
}

export interface TSParseResult extends ParseBasicResult {
    js: string;
    ts: string;
}