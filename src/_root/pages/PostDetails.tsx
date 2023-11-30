import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { formatDateString } from "@/lib/utils";
import { Ghost, Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');
  const { user } = useUserContext();


  const handleDeletePost = () => {}


  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img 
            src={post?.imageUrl}
            alt="creator's post"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link to={`/profile/${post?.creator.$id}`} className="flex items-center gap-3">
                <img
                  src={post?.creator?.imageUrl || 'assets/icons/profile-placeholder.svg'}
                  alt="user-prifile-image"
                  className="rounded-full w-8 h-8 lg:w-12 lg:h-12"
                />

                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creator.name}
                  </p>

                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtlle-semibold lg:small-regular">
                      {formatDateString(post?.$createdAt)}
                    </p>

                    -

                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>


              <div className="flex-center">
                <Link to={`/update-post/${post?.$id}`} className={`${user.id !== post?.creator.$id && 'hidden'}`}>
                  <img
                    src="/assets/icons/edit.svg"
                    alt="edit button"
                    width={24}
                    height={24}
                  />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ghost_details-delete_btn ${user.id !== post?.creator.$id && 'hidden'}`}
                >
                  <img 
                    src="/assets/icons/delete.svg"
                    alt="delete button"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails