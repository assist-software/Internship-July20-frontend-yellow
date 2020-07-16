
import React from 'react'
import { Button, Card, Image, Grid, GridColumn, GridRow } from 'semantic-ui-react'

const PersonClubThumbnail = () => (
    <div className = "person-club-card">
    <Card>
      <Card.Content>
        <Image
          floated='left'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          circular
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description Content>
        <Grid>
              <GridRow className = "card-grid">
                <GridColumn floated="left" align="left" computer="8" tablet="8">
                    <label>Primary sport</label>
                </GridColumn>
                <GridColumn
                  floated="right"
                  align="left"
                  computer="8"
                  tablet="8"
                >
                  <label>Secondary sport</label>
                </GridColumn>
              </GridRow>
              <GridRow padding>
                <GridColumn floated="left" align="left" computer="8" tablet="8">
                    <label>Primary sport</label>
                </GridColumn>
                <GridColumn
                  floated="right"
                  align="left"
                  computer="8"
                  tablet="8"
                >
                  <label>Secondary sport</label>
                </GridColumn>
              </GridRow>
            </Grid>
        </Card.Description>
      </Card.Content>
    </Card>
    </div>
)

export default PersonClubThumbnail;