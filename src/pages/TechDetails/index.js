import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, Title } from './styles';


export default function TechDetails() {
  const route = useRoute();

  const { tech } = route.params;

  return(
    <Container>
      <Title>{tech.id}</Title>
    </Container>
  )
}
