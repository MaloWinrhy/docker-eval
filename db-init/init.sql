-- TABLE BOOKS
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    publication_date DATE,
    isbn VARCHAR(13),
    price DECIMAL(10,2),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FIXTURES
INSERT INTO books (title, author, genre, publication_date, isbn, price, description) VALUES
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', '1960-07-11', '9780446310789', 12.99, 'A classic of modern American literature'),
('1984', 'George Orwell', 'Science Fiction', '1949-06-08', '9780451524935', 10.99, 'A dystopian social science fiction novel'),
('Pride and Prejudice', 'Jane Austen', 'Romance', '1813-01-28', '9780141439518', 9.99, 'A romantic novel of manners'),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '1937-09-21', '9780547928227', 14.99, 'A fantasy novel and children''s book'),
('The Da Vinci Code', 'Dan Brown', 'Mystery', '2003-03-18', '9780307474278', 16.99, 'A mystery thriller novel');