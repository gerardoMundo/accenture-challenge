import PropTypes from 'prop-types';

export const Post = ({ title, comments, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{comments}</h5>
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  comments: PropTypes.string,
  content: PropTypes.string,
};
