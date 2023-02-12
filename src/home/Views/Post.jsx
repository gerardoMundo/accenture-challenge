import PropTypes from 'prop-types';
import { PostContainer } from '../../style';

export const Post = ({ title, comments, content, img, foot }) => {
  return (
    <PostContainer imgUrl={img}>
      <h2>{title}</h2>
      <h5>{comments}</h5>
      <p>{content}</p>
      <h4>{foot}</h4>
    </PostContainer>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  comments: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  foot: PropTypes.string,
};
