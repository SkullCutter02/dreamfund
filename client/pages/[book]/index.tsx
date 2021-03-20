import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactAudioPlayer from "react-audio-player";

interface Props {
  book: string;
}

const MainBookPage: React.FC<Props> = ({ book }) => {
  useEffect(() => {
    const updateBookCount = async () => {
      await fetch(`/api/${book}`, {
        method: "PATCH",
      });
    };

    updateBookCount().then();
  });

  const modifyBookName = (book: string): string => {
    return book
      .split("_")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
  };

  return (
    <React.Fragment>
      <div>
        <h2>{modifyBookName(book)}</h2>
        <ReactAudioPlayer
          src={`/${book}.m4a`}
          controls
          style={{ width: "90%" }}
        />
      </div>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { book: "a_bird_who_wanted_to_swim" } },
      { params: { book: "a_journey_to_the_north_pole" } },
      { params: { book: "a_splash_of_color" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      book: params.book,
    },
  };
};

export default MainBookPage;
