import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Container, Li } from "./style";
import baseUrl from "../../../utils/baseUrl";
import PostCard from "../../postCard";
import PostModal from "../../postModal";
import LoadingScreenCard from "../../loadingScreens/postCard";
import NoFavoritesFoundMessage from "./NoFavoritesFoundMessage";

const index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let loadingCards = [];
  for (let i = 0; i < 5; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails/myfavorites`;
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      {isLoading && loadingCards}
      {!isLoading && posts.length > 0 && (
        <>
          <PostModal quickData={posts} />
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} />
              </Li>
            );
          })}
        </>
      )}
      {!isLoading && posts.length === 0 && <NoFavoritesFoundMessage />}
    </Container>
  );
};

export default index;