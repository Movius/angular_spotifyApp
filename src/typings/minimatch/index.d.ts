// Minimal type package to satisfy `@types/glob` -> reference to 'minimatch'
declare module 'minimatch' {
  function minimatch(path: string, pattern: string, options?: any): boolean;
  namespace minimatch {
    function makeRe(pattern: string, options?: any): RegExp;
  }
  export = minimatch;
}

// also provide an ambient empty export so `types` lookup succeeds
export {};
