import React, { useState, useEffect } from "react";
import Link from "next/link";

import Spinner from "../components/Spinner";
import modifyBookName from "../utils/modifyBookName";

type BookDataType = {
  book: string;
  count: number;
};

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [bookData, setBookData] = useState<BookDataType[]>(null);

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data: BookDataType[]) => {
        setIsLoading(false);
        setBookData(data);
      })
      .catch((err: Error) => {
        console.log(err);
        setError(err);
        setIsError(true);
      });
  }, []);

  const countTotal = (bookData: BookDataType[]): number => {
    let total = 0;

    bookData.forEach((book) => (total += book.count));

    return total;
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner size={40} />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        bookData && (
          <div className="container">
            <p>Total: {countTotal(bookData)}</p>
            {bookData.map((book) => (
              <div className="book">
                <Link href={`/${book.book}`}>
                  <p>
                    {modifyBookName(book.book)}: {book.count}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )
      )}

      <style jsx>{`
        .container {
          width: 90%;
          margin: 50px auto;
        }

        .book {
          margin-top: 10px;
          max-width: fit-content;
        }

        .book p {
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AdminPage;
