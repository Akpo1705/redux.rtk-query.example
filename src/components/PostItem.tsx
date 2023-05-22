import react from 'react'
import { IPost } from '../store/models/IPosts';

interface PostItemProps {
        post: IPost;
        remove: (post: IPost) => void; 
        update: (post: IPost) => void; 
}

const PostItem: react.FC<PostItemProps> = ({post, remove, update}) => {

        const handlerRemove = (event: React.MouseEvent) => {
                event.stopPropagation()
                remove(post)
        }

        const handlerUpdate = (event: React.MouseEvent) => {
                event.stopPropagation()
                const title = prompt() || "";
                update({...post, title})
        }

        return (
                <div className='post' onClick={handlerUpdate}>
                        {post.id}. {post.title}
                        <button onClick={handlerRemove}>Delete</button>
                        <button>Update</button>
                </div>
        );
}

export default PostItem;