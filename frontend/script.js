async function filterBooks() {
    const genre = document.getElementById('genre').value;
    const response = await fetch(`/api/books?genre=${genre}`);
    const books = await response.json();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    
    for (const book of books) {
        const li = document.createElement('li');
        
        // Fetch book cover
        let coverUrl = '';
        try {
            const coverResponse = await fetch(`https://bookcover.longitood.com/bookcover?book_title=${encodeURIComponent(book.title)}&author_name=${encodeURIComponent(book.author)}`);
            const coverData = await coverResponse.json();
            coverUrl = coverData.url;
        } catch (error) {
            console.error('Error fetching book cover:', error);
            coverUrl = 'placeholder-image-url.jpg';
        }

        const bookInfo = `
            <img src="${coverUrl}" alt="Book cover" style="max-width: 150px; margin-bottom: 10px;"><br>
            Title: ${book.title}
            Author: ${book.author}
            Genre: ${book.genre}
            Published: ${new Date(book.publication_date).toLocaleDateString()}
            ISBN: ${book.isbn}
            Price: $${book.price}
            Description: ${book.description}
        `;
        li.innerHTML = bookInfo.split('\n').map(line => line.trim()).join('<br>');
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteBook(book._id);
        li.appendChild(deleteButton);
        
        bookList.appendChild(li);
    }
}
