const dateBuilderAccordion = (d) => {
  let months = [
    "-jan-",
    "-feb-",
    "-mar-",
    "-apr-",
    "-may-",
    "-jun-",
    "-jul-",
    "-aug-",
    "-sep-",
    "-oct-",
    "-nov-",
    "-dec-",
  ];
  
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date}${month}${year}`;
};

export default dateBuilderAccordion