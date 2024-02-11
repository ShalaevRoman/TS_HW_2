showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category
}

interface Library {
    lib: string;
    books: number;
    avgPagesPerBook: number;
}

function getAllBooks(): Book[] {
    return [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true,  category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ]
}

function logFirstAvailable(booksCollection: Book[] ): void {
    console.log('кількість книжок', booksCollection.length);
    const nameFirsAvailableBook = booksCollection.filter(book => book.available)[0].title
    console.log('назва першої доступної', nameFirsAvailableBook);
}

logFirstAvailable(getAllBooks())

function getBookTitlesByCategory(category: Category): string[] {
    const filteredBooks = getAllBooks().filter(book => book.category === category);
    return filteredBooks.map(book => book.title);
}

function logBookTitles(arrayOfNamesBooksByCategory: string[]): void {
    console.log('масив назв книг за категорією', arrayOfNamesBooksByCategory);
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript))

type bookInfoByIndex = [title: string, author: string]
function getBookAuthorByIndex(index: number): bookInfoByIndex | undefined {
    const book = getAllBooks()[index];

    if (book) {
        return [book.title, book.author];
    }
    return undefined;
}

console.log('масив пари назва автор, по індексу', getBookAuthorByIndex(0));

function calcTotalPages(): bigint {

    const libData: Library[] = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result: number = libData.reduce((acc: number, lib: Library) => {
        acc += lib.books * lib.avgPagesPerBook
        return acc
    }, 0)

    return BigInt(result)
}

console.log('кількість сторінок книг у трьох бібліотеках міста', calcTotalPages());