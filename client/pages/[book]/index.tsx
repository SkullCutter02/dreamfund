import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactAudioPlayer from "react-audio-player";
import modifyBookName from "../../utils/modifyBookName";

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

  return (
    <React.Fragment>
      <div>
        <h2>{modifyBookName(book)}</h2>
        <ReactAudioPlayer
          src={`/${book}.m4a`}
          controls
          style={{ width: "100%" }}
        />
      </div>

      <style jsx>{`
        div {
          height: 100vh;
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
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