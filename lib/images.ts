/**
 * Get the correct image path accounting for basePath in deployed environments
 */
export function getImagePath(path: string): string {
  // In production with basePath, images should work automatically
  // This utility ensures consistency
  return path;
}
