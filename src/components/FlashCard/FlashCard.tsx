import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Vocabulary } from '../../layout/LayoutModel';

export interface FlashCardProps {
  word: Vocabulary,
  showEnglishAsPrimary: boolean,
  showEnglishText: boolean,
  showKoreanText: boolean,
  showRomanizationText: boolean
}

export interface FlashCardState {
  // showEnglishText: boolean,
  // showKoreanText: boolean,
  // showRomanizationText: boolean
}

export class FlashCard extends React.Component<FlashCardProps, FlashCardState> {
  constructor(props: FlashCardProps) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Card elevation={5} className={""}>
        <CardContent>
          <Typography className={""} color="textSecondary" gutterBottom>
            {this.props.word.itemKey}
          </Typography>
          <Typography variant="h5" component="h2">
            <h4>{this.props.showEnglishAsPrimary ? this.props.word.english : this.props.word.korean}</h4>
          </Typography>
          <Typography className={""} color="textSecondary">
            <h2>{this.props.showEnglishAsPrimary ? this.props.word.korean : this.props.word.english}</h2>
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.word.romanization}
          </Typography>
        </CardContent>
      
      </Card>
    );
  }
}
