import  { Component,ReactNode } from 'react'
import {StyledSubCard} from './styles';
import PriceLabel from '../Prices/PriceLabel';
import DownloadBtn from '../Buttons/DownloadBtn';

interface subCardProps{
  title:string;
  content?:string;
  price?:string;
  unit?:string;
}
export default class SubCard extends Component<subCardProps> {
  onClick = () => {
    console.log('You click');
  }
  render():ReactNode {
    const {title,content, price, unit} = this.props;
    return (
      <StyledSubCard>
        <span>{title}</span>
        <span>{content}</span>
        <PriceLabel price={price} unit={unit}/>
        <DownloadBtn label='Android' onClick={this.onClick} />
        <DownloadBtn label='IOS' onClick={this.onClick} />
      </StyledSubCard>
    )
  }
}
