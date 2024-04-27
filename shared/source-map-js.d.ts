import { SourceMapGenerator as SMG } from 'source-map-js';

declare module 'source-map-js/lib/source-map-generator' {
    export { SMG as SourceMapGenerator };
}