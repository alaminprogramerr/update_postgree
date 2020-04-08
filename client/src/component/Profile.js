import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import decoder  from 'jwt-decoder'
class Profile extends React.Component {
    state={
        user:''
    }
    componentDidMount(){
        let token =window.localStorage.getItem('application_data')
        var decode = decoder(token)
        console.log(decode)
        console.log(decode)
        console.log(decode)
        
    }
    render(){
        return(
            <div className="col-md-4 offset-md-4">
                <Card  className="mt-5">
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <p>Name:Alamin</p>
                            <p>Email:alamin@gmail.com</p>
                            <p>Contact Numbet:989132847</p>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="mt-4" component="p">
                            <h6>About yours</h6>
                            <p style={{fontSize:'18px'}}>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </p>
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