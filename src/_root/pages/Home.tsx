import { Loader } from "lucide-react";


const Home = () => {
  const isPostLoading = true;
  const posts = null;


  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home</h2>

          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul></ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home