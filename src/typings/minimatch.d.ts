declare module 'minimatch' {
  function minimatch(path: string, pattern: string, options?: any): boolean;
  namespace minimatch {
    function makeRe(pattern: string, options?: any): RegExp;
  }
  export = minimatch;
}
