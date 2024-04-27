import fs from 'node:fs';
import path from 'node:path';

// Define the supported file extensions
const extensions: string[] = ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'];

/**
 * Resolves a relative path by attempting various file extensions.
 * @param basePath The base directory path, typically __dirname or process.cwd().
 * @param relativePath The relative path to resolve.
 * @returns The resolved file path or null if no file is found.
 */
export function resolvePath(basePath: string, relativePath: string): string | null {
    // Ensure the base path is absolute
    if (!path.isAbsolute(basePath)) {
        basePath = path.resolve(basePath);
    }

    // Construct the full path
    let fullPath = path.resolve(basePath, relativePath);

    // Check if the path directly points to an existing file
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        return fullPath;
    }

    // Try appending various extensions to the path
    for (let ext of extensions) {
        let candidate = fullPath + ext;
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            return candidate;
        }
    }

    // Try resolving as a directory with an index file
    for (let ext of extensions) {
        let indexCandidate = path.join(fullPath, `index${ext}`);
        if (fs.existsSync(indexCandidate) && fs.statSync(indexCandidate).isFile()) {
            return indexCandidate;
        }
    }

    // Return null if no file is found
    return null;
}
