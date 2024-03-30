// given a source and a target
// find the minimum number of copies of source you need to create target
// need to append copies to each other
// can remove chars from the copy

// source = 'ap' target = 'papa' => p | ap | a, 3 copies
// source = 'aba' target = 'aa' => aa, 1 copy (remove middle 'b')

function minimumCopies(source, target) {
  // two pointers
  let i = 0;
  let j = 0;
  let copies = 0;

  while (j < target.length) {
    // advance i until end of source
    // reach end => reset i to zero
    // increment copies

    let temp = j;

    // for demonstration purposes
    let curSequence = "";

    while (i < source.length) {
      if (source[i] === target[j]) {
        curSequence += target[j];
        j++;
      }
      i++;
    }

    if (j !== temp) {
      console.log(curSequence);
      copies++;
    }

    i = 0;
  }

  return copies;
}

console.log(minimumCopies("ap", "papa"), 3);
console.log(minimumCopies("aba", "aa"), 1);
