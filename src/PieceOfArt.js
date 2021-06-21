function PieceOfArt({longTitle, imgSrc, title}) {
  // const {longTitle, imgPath, title} = props;
  return (
    <div>
      <h1>welcome peeepsss</h1>
      <h2>{longTitle}</h2>
      <img src={imgSrc} alt={title} />
    </div>
  )
}
export default PieceOfArt;