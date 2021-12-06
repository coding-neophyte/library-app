import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { bookId } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    getBookById(bookId).then(({ data }) => setBook(data))
  }, [bookId])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <h3>
        {' '}
        <p>
          <Link to="/books"> Back to Books </Link>
        </p>
      </h3>
      <Book book={book} showDetail />
    </>
  )
}

export default BookDetail
