import React, { useEffect } from 'react';
import { Text } from "react-native";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../redux/modules/Movie";

const ScrollView = styled.ScrollView`
  padding: 10px;
`;

const MovieScreen = ( { navigation } ) => {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie);

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, []);

  return (
    <ScrollView>
      {
        movie.getMovies.status !== "REQUEST" ? movie.movies.map(movie => <Text>{movie.title}</Text>) : <Text>Loading...</Text>
      }
    </ScrollView>
  );
};

export default MovieScreen;
