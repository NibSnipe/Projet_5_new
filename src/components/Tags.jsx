import "../sass/tags.scss";

const Tags = ({ tags }) => {
  return (
    <div>
      <div className="tag-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
