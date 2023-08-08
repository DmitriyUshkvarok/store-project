function transliterateToCyrillic(text) {
  const translitMap = {
    a: 'а',
    b: 'б',
    c: 'ц',
    d: 'д',
    e: 'е',
    f: 'ф',
    g: 'г',
    h: 'х',
    i: 'і',
    j: 'й',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    q: 'к',
    r: 'р',
    s: 'с',
    t: 'т',
    u: 'у',
    v: 'в',
    w: 'в',
    x: 'кс',
    y: 'и',
    z: 'з',
    sh: 'щ',
    // Додайте інші літери за необхідності
  };

  return text
    .split('')
    .map((char, index) => {
      if (index === 0) {
        return translitMap[char.toLowerCase()].toUpperCase() || char;
      }
      return translitMap[char.toLowerCase()] || char;
    })
    .join('');
}

export default transliterateToCyrillic;
