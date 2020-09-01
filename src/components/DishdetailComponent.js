import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    getFormattedDate(date) {
        var date1 = new Date(date);
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        return `${month[date1.getMonth()]} ${date1.getDay()},${date1.getFullYear()}`;
    }

    renderComments(comment) {
        return (
            <div key={comment.id} className="li">
                <CardBody>
                    <CardText>{comment.comment}</CardText>
                    <CardText>-- {comment.author + " " + this.getFormattedDate(comment.date)}</CardText>
                </CardBody>
            </div>)
    }

    render() {

        const comments = this.props.selectedDish.comments.map((comment) => this.renderComments(comment));
        return (
            <div className="row">
                <Card className="col-12 col-md-5">
                    <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                <Card className="col-12 col-md-5">
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {comments}
                    </CardBody>
                </Card>
            </div>
        );
    }

}


export default DishDetail
