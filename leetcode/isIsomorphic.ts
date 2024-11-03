const isIsomorphic = (s: string, t: string): boolean => {
    const memo_s = new Map<string, string>();
    const memo_t = new Map<string, string>();
    const length: number = s.length;
    
    for (let i = 0; i < length; i++) {
      if (memo_s.has(s[i])) {
        if (t[i] !== memo_s.get(s[i])) {
          return false;
        }
      } else {
        memo_s.set(s[i], t[i]);
      }
      
      if (memo_t.has(t[i])) {
        if (s[i] !== memo_t.get(t[i])) {
          return false;
        }
      } else {
        memo_t.set(t[i], s[i]);
      }
    }
    
    return true;
};