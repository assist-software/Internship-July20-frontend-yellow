import React, { Component } from "react";

import { Grid, GridRow, Button } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import InputSearch from "../../../common/InputSearch";
import './selected-club.css';
import PersonClubThumbnail from './person-in-club-card'

import header_icon from '../../../assets/club-header-icon.svg';

class SelectedClub extends Component{
    render(){
        return(
            <div className = 'selected-club-main'>
            <div className = 'header-selected-club'>
            <h2>Biking Club</h2>
            <img src = {header_icon} className = "icon-header"/>
            </div>
            <label>Coach</label><br/>
            <label>Coach name</label>
            <div>
            <button>Members</button>
            <button>Requests</button>
            <Grid>
              <GridRow>
                <GridColumn floated="left" align="left" computer="8" tablet="8">
                  <InputSearch  />
                </GridColumn>
                <GridColumn
                  floated="right"
                  align="right"
                  computer="8"
                  tablet="8"
                >
                  <button className="button" onClick={this.showModal}>
                    Add new
                  </button>
                </GridColumn>
              </GridRow>
            </Grid>
            <PersonClubThumbnail/>
            </div>
            </div>
            
            
        )
    }
}

export default SelectedClub;