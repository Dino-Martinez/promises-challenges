/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *
 *    It will will read 'Step 1, Step 3, Step 2' Because the second step will be
 *    executed via setTimeout, which runs asynchronously. This means it allows
 *    Step 3 to be printed while 'waiting' for the timeout to end and Step 2 to
 *    be printed
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *
 *    They were printed in the order I expected: Step 1, Step 3, Step 2
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 *    They will run in the same order as before. This is because all synchronous
 *    code is run first, before ANY async code. The setTimeout will be added to
 *    a task list, which will be executed after one iteration of the event loop.
 *    (NOTE: I just so happened to watch this video like, two days before this
 *    lecture, lmao:
 *    https://www.youtube.com/watch?v=vn3tm0quoqE&ab_channel=Fireship)
 *     👍
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze (action) {
  setTimeout(function () {
    action()
  }, 0)
}
console.log('Step 1')

snooze(function () {
  console.log('Step 2')
  console.log('Async Action completed via callback')
})

console.log('Step 3')
