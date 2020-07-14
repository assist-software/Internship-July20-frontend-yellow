import React, {Component} from 'react';

import Button from '../../common/Button';
import InputSearch from '../../common/InputSearch';
import InputForm from './InputForm/InputForm'

import ClubThumbnail from './ClubThumbnail';
import { Grid, GridRow } from 'semantic-ui-react';
import { GridColumn } from 'semantic-ui-react';

import './Club.css';



class Club extends Component{
    
    render(){
        
       return(
        <div className= 'club-main'>
            <h2 className = 'page-title-club'>Clubs</h2>
            <div>
                <Grid>
                    <GridRow >
                        <GridColumn floated = 'left' align= 'left' computer = '8' tablet = '8'>
                            <InputSearch />
                        </GridColumn>
                        <GridColumn floated ='right' align = 'right' computer = '8' tablet = '8'>
                            <Button onClick={() => {
                                console.log('succes');
                            }} name= {"Add new"}/>
                        </GridColumn>
                    </GridRow>
                </Grid>
                <ClubThumbnail  name = "Bike Club" coach = "coach"/>
                
                
            </div>
            
        </div>
    )  
    }
   
}


export default Club;