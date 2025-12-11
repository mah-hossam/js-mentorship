// Optimized version – always the same type
function fast(x) {
  return x + x;           // V8 sees only numbers → super fast
}
console.time("fast");
for (let i = 0; i < 50_000_000; i++) fast(5);
console.timeEnd("fast");

// Slow version – changes type halfway
function slow(x) {
  return x + x;           // first numbers, then strings → deoptimization!
}
console.time("slow");
for (let i = 0; i < 50_000_000; i++) slow(i < 25_000_000 ? 5 : "5");
console.timeEnd("slow");
