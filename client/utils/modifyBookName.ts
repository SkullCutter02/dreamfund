const modifyBookName = (book: string): string => {
  return book
    .split("_")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

export default modifyBookName;
