import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default class About extends PureComponent {
    componentDidMount(){
        if(!window.localStorage.getItem('application_data')){
            window.location.href='/login'
        }
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                
                <Card  className="mt-5">
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    About Us
                                </Typography>
                                <div>
                                If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The Responsible Disclosure Program details the procedure for disclosing security issues.
                                </div>
                                <Typography variant="body2" color="textSecondary" className="mt-4" component="p">
                                    <h5>Description : </h5>
                                    If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The Responsible Disclosure Program details the procedure for disclosing security issues.


                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary"><span>Like</span></Button>
                            </CardActions>
                        </Card>
            </div>
        )
    }
}
