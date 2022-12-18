/* In the code below an element is given to the search() function.
Change it so that the function searches for the last occurrence of
 the element and returns its index. */

const results = [3, 5, 2, 1, 2, 3, 4, 6, 1, 5];

function search(element) {
    // Write your code here
    const index = results.lastIndexOf(element);
    return index;
}