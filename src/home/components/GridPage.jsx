import { dataPost } from '../../data/dataPost';
import { GridContainer } from '../../style';
import { Post } from '../Views/Post';

export const GridPage = () => {
  return (
    <GridContainer>
      {dataPost.map(({ title, comments, content, img, foot }, idx) => {
        return (
          <Post
            key={idx}
            title={title}
            comments={comments}
            content={content}
            img={img}
            foot={foot}
          />
        );
      })}
    </GridContainer>
  );
};
