import * as React from "react";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { arrayToObject } from "../store/arrayToObject";
import { vocab } from "./LayoutModel";
import { Container, FormControlLabel, Grid, Paper, Switch } from '@material-ui/core';
import "./layout.css"
import {FlashCard} from "../components/FlashCard/FlashCard";


export interface LayoutProps {
  
}

export interface LayoutState {
  englishPrimary: boolean
}


export class Layout extends React.Component<LayoutProps,LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      englishPrimary: false
    };
  }

  renderList = () => {
    const englishToKorean = arrayToObject(vocab);
    const rsx = englishToKorean.map(word => (
      <Paper elevation={3}>
      <ListItem button>
        <ListItemText primary={word.english} secondary={word.korean}/>
      </ListItem>
      </Paper>
    ))
    return rsx;  
  }

  renderPaper = () => {
    const englishToKorean = arrayToObject(vocab);
    const rsx = englishToKorean.map((word, index) => (
      // <Paper elevation={3} className="paper">
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          {/* {index} <br/>
          {word.english}  <br/>
          {word.korean} <br/>
          {word.romanization} */}
          <FlashCard 
            word={word}
            showEnglishAsPrimary={this.state.englishPrimary}
            showEnglishText={true}
            showKoreanText={true}
            showRomanizationText={true}
          />
        </Grid>
      // </Paper>
    ))
    return rsx;  
  }

  handleChange = () => {
    this.setState({englishPrimary: !this.state.englishPrimary});
  }

  render() {
    return(
      <>
        <h1>Korean Vocabulary</h1>
        <div className="sticky">
          <FormControlLabel
            control={<Switch checked={this.state.englishPrimary} onChange={this.handleChange} name="checkedB" />}
            label="Primary English" color="white"
          />
        </div>
        <br/><br/><br/>
        <Container fixed className="mt-5">
          <Grid container alignItems="stretch" spacing={5}>
            {this.renderPaper()}
          </Grid>
        </Container>
        {/* <List
          dense={true}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              
            </ListSubheader>
          }
          className={""}
        >
          {this.renderList()}
        </List> */}
      </>
    );
  }
}