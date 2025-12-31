const cat = {
  a: 'Original Cat Object',
  speak(sound) {
    console.log('THIS: ', this);

    return `${this.a} says "${sound}"`;
  },
};

console.log(cat.speak('Cat Object'));
// 'this' = cat (implicit binding)

let fn = cat.speak;
console.log(fn('Global')); // 'this' = undefined/window (default binding)

let explictBinding = fn.bind(cat, 'Explict Binding');
console.log(explictBinding());

console.log(fn.call(cat, 'call'));
