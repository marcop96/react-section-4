/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <li className="concept">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default Card;
