/* Create a function that takes in an integer as an argument and returns 'even' for even nummbers or 'odd' for odd numbers... */

function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log('Even');
        return 'odd';
    } else {
        console.log('Odd');
        return 'even';
    }
}

evenOrOdd(10);