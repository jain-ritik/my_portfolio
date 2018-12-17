import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavHashLink as NavLink } from 'react-router-hash-link';




const styles = {
  root: {
    flexGrow: 1,


  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  

  


  render() {
    const { classes } = this.props;

    return (
        <div>
     
      <Paper className={classes.root}>

        <Tabs 
         className="button"
         value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
         
          centered>

          <Tab label="Home" to ='/home'  component= {NavLink}/>
          <Tab label="About"  to='/About' href = "#about1" component={NavLink} />
          <Tab label="Work" to ='/work'  component= {NavLink} />
          <Tab label="Reference" />
          <Tab label="portfolio" />
        </Tabs>
      </Paper>
      
     
     </div>

    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);