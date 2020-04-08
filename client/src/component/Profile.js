import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import decoder from 'jwt-decode'
class Profile extends React.Component {
    state={
        user:{}
    }
    componentDidMount(){
        let token =window.localStorage.getItem('application_data')
        var decoded = decoder(token)
        console.log(decoded)
        console.log(decoded)
        console.log(decoded)
        console.log(decoded)
        console.log(decoded)
        this.setState({user:{...decoded}})
    }
    render(){
        return(
            <div className="col-md-4 offset-md-4">
                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            <p>Name: {this.state.user.name} </p>
                            <p>Email: {this.state.user.email} </p>
                            <p>Contact Number: {this.state.user.contactnumber} </p>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="mt-4" component="p">
                            <h6>About yours</h6>
                            <p style={{fontSize:'18px'}}> {this.state.user.description} </p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small"  color="danger">Log Out</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Profile