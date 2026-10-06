const Pen = (props) => {
  const{picUrl,company,price}=props.pen;
  return (
    <div className="book">
      <img src={picUrl} alt={company} />
      <h1>{company}</h1>
      <h2>Price: {price}</h2>
    </div>
  );
};

export default Pen;