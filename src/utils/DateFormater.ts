const useDate = (dataMock) => {
    const date = new Date(dataMock.snippet.publishedAt).toString();
    const newDates = date.split(" ").slice(0, 4).join(" ");
    return newDates;
  };
  
  export default useDate;
  