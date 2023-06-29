import Button from "./Button";

export default function Servant({ id, name, image,classof, stars, setEditedServant }) {
  return (
    <div className="Servant">
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <p>{classof}</p>
        <p>
          {stars}
        </p>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedServant({
                id,
                name,
                image,
                classof,
                stars,
              })
            }
          >
            Edit
          </Button>
          <Button>Beli</Button>
        </div>
      </section>
    </div>
  );
}
