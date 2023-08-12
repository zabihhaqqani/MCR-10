import "./Card.css";

const Card = ({ data }) => {
  return (
    <tr>
      <td>
        <img className="image" src={data?.imageUrl} alt={data?.imageUrl} />
      </td>
      <td>{data?.name}</td>
      <td>{data?.description}</td>
      <td>${data?.price}</td>
      <td>{data?.stock}</td>
      <td>{data?.supplier}</td>
    </tr>
  );
};

export default Card;
