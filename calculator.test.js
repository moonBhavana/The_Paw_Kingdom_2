

// const Checkbox_Click = require('./calculator');

// describe('Checkbox_Click function', () => {
//   test('calculates the total correctly', () => {
//     // Set up a test DOM with three checkboxes, each with a different value
//     document.body.innerHTML = `
//       <div>
//         <input type="checkbox" value="10" checked>
//         <input type="checkbox" value="5" checked>
//         <input type="checkbox" value="2.5" checked>
//       </div>
//       <div id="output"></div>
//       <input id="discountedTotal" type="checkbox">
//     `;

//     // Call the function
//     Checkbox_Click();

//     // Check that the total was calculated correctly and displayed
//     expect(document.getElementById('output').innerHTML).toBe('Total is: $17.50');

//     // Check that the discount checkbox is not checked
//     expect(document.getElementById('discountedTotal').checked).toBe(false);
//   });

//   test('applies the discount correctly', () => {
//     // Set up a test DOM with three checkboxes, each with a different value
//     document.body.innerHTML = `
//       <div>
//         <input type="checkbox" value="10" checked>
//         <input type="checkbox" value="5" checked>
//         <input type="checkbox" value="2.5" checked>
//       </div>
//       <div id="output"></div>
//       <input id="discountedTotal" type="checkbox" checked>
//     `;

//     // Call the function
//     Checkbox_Click();

//     // Check that the total was calculated correctly and displayed with the discount
//     expect(document.getElementById('output').innerHTML).toBe('After discount total is: $15.75');

//     // Check that the discount checkbox is checked
//     expect(document.getElementById('discountedTotal').checked).toBe(true);
//   });
// });




// const Checkbox_Click = require('./calculator.js');
// const { JSDOM } = require('jsdom');

// describe('Checkbox_Click function', () => {
//   let dom;

//   beforeEach(() => {
//     dom = new JSDOM(`
//       <html>
//         <body>
//           <div>
//             <input type="checkbox" value="10" checked>
//             <input type="checkbox" value="5" checked>
//             <input type="checkbox" value="2.5" checked>
//           </div>
//           <div id="output"></div>
//           <input id="discountedTotal" type="checkbox">
//         </body>
//       </html>
//     `);
//     global.document = dom.window.document;
//   });

//   afterEach(() => {
//     global.document = undefined;
//     dom.window.close();
//   });

//   test('calculates the total correctly', () => {
//     Checkbox_Click();
//     expect(document.getElementById('output').innerHTML).toBe('Total is: $17.50');
//     expect(document.getElementById('discountedTotal').checked).toBe(false);
//   });

//   test('applies the discount correctly', () => {
//     document.getElementById('discountedTotal').checked = true;
//     Checkbox_Click();
//     expect(document.getElementById('output').innerHTML).toBe('After discount total is: $15.75');
//     expect(document.getElementById('discountedTotal').checked).toBe(true);
//   });
// });

const Checkbox_Click = require('./calculator');

test('Checkbox_Click function works correctly', () => {
  // Create a mock HTML element
  document.body.innerHTML = `
    <div>
      <input type="checkbox" value="10.00" checked>
      <input type="checkbox" value="5.00">
      <input type="checkbox" value="15.00" checked>
      <input type="checkbox" value="20.00">
      <input type="checkbox" value="25.00" checked>
      <input type="checkbox" value="30.00">
      <input type="checkbox" value="35.00" checked>
      <input type="checkbox" value="40.00">
    </div>
    <div>
      <input type="checkbox" id="discountedTotal" checked>
    </div>
    <div id="output"></div>
  `;

  // Call the function
  Checkbox_Click();

  // Check the output
  expect(document.getElementById('output').innerHTML).toBe('After discount total is: $76.5');
//   expect(document.getElementById('output').innerHTML).toBe('After discount total is: $15.75');
});
