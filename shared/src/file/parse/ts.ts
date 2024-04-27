import { transformTS } from "../transform"
import { parseCommentMeta } from "./comment";
import { ParseResult } from "./default";

export async function parseTS(rawContent: string): Promise<TSParseResult> {
    return {
        ts: rawContent,
        js: await transformTS(rawContent),
        docMeta: parseCommentMeta(rawContent),
        code: rawContent
    }
}

export interface TSParseResult extends ParseResult {
    js: string;
    ts: string;
}