var isAnagram = function(s, t) {
  let chars = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
      chars[s[i]] ? chars[s[i]]++ : chars[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
      if (chars[t[i]]) chars[t[i]]--;
      else return false;
  }
  return true
};

