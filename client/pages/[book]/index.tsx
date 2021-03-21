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
        <img src={`/${book}.png`} alt="Not found" />
        <h2>{modifyBookName(book)}</h2>
        <ReactAudioPlayer
          src={`/${book}.m4a`}
          controls
          style={{ width: "100%" }}
        />
      </div>

      <style jsx>{`
        div {
          width: 70%;
          margin: 0 auto;
        }

        h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        img {
          height: 300px;
          border: 1px solid grey;
          display: block;
          margin: 80px auto;
          object-fit: cover;
        }

        @media screen and (max-width: 600px) {
          div {
            width: 80%;
          }
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
      { params: { book: "adventure_under_the_water" } },
      { params: { book: "all_that_matters_is_the_heart" } },
      { params: { book: "big_foot's_life" } },
      { params: { book: "from_under_the_table_to_antartica" } },
      { params: { book: "i_won't_be_alone_anymore" } },
      { params: { book: "jimanju_bees" } },
      { params: { book: "kat's_first_trip" } },
      { params: { book: "lifelong_lessons" } },
      { params: { book: "octopus_pipi_catches_friends" } },
      { params: { book: "streaky's_story" } },
      { params: { book: "tessa's_tree_house" } },
      { params: { book: "the_future_and_the_past" } },
      { params: { book: "the_strange_case_of_the_blue_chicken_pox" } },
      { params: { book: "the_wolf_and_the_sheep" } },
      { params: { book: "tom's_adventure" } },
      { params: { book: "what_a_day" } },
      { params: { book: "your_victory_is_right_around_the_corner" } },
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
