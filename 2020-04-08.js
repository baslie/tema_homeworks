function StrangeMatrix(max=4) {
    let dim = (max * 2) + 1; // Размерность таблицы
    let m = 0;
    for (let i = 0; i < dim; i++) {
        let n = 0;
        for (let j = 0; j < dim; j++) {
            process.stdout.write(Math.abs(n-m).toString());
            if ((j < dim/2) && (n != max))
                n++;
            else
                n--;
        }
        if ((i < dim/2) && (m != max))
            m++;
        else
            m--;
        process.stdout.write('\n');
    }
}

function DrawZ(a) {
    let b = a - 1;
    for (let i = 0; i < a; i++) {
        if ((i == 0) || (i == a-1)) {
            for (let j = 0; j < a; j++) {
                process.stdout.write('1');
            }
        } else {
            for (let j = 0; j < a; j++) {
                if (j == b) {
                    process.stdout.write('1');
                } else {
                    process.stdout.write('0');
                }
            }
        }
        b--;
        process.stdout.write('\n');
    }
    return;
}

function AandB(a, b) {
    let firstLetter = "0";
    let secondLetter = "1";
    let buf;
    for (let i = 0; i < a; i++) {
        buf = firstLetter
        for (let j = 0; j < b; j++) {
            if (j%2) {
                process.stdout.write(secondLetter);
            } else {
                process.stdout.write(buf);
            }
        }
        firstLetter = secondLetter;
        secondLetter = buf;
        process.stdout.write('\n');
    }
}

// №1
let max = 4; // Максимальное число в таблице — от него строится всё остальное
StrangeMatrix(max);
process.stdout.write('\n');

// №2
let dim = 10; // Размерность таблицы
DrawZ(dim);
process.stdout.write('\n');

// №3
let a = 10; // Высота таблицы
let b = 10; // Ширина таблицы
AandB(a, b);
