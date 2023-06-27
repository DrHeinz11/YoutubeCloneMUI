interface HandleScroll {
  direction: string;
  coordinate: number;
  behavior: string;
}
export const HandleScrollToTop = ({
  direction,
  coordinate,
  behavior,
}: HandleScroll) => {
  window.scrollTo({ [direction]: coordinate, [behavior]: behavior });
};
