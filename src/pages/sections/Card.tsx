import { Component,ReactNode } from 'react'
import VectorCard from '../../components/Vectors/VectorCard'
import {StyledCard} from './styles';

export default class Card extends Component {
  render() :ReactNode{
    return (
      <StyledCard>
        <VectorCard />
      </StyledCard>
    )
  }
}
