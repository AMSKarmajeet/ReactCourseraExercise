import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish() {
        if (this.state.selectedDish != null) {
            return(<DishDetail selectedDish ={this.state.selectedDish}></DishDetail>)
        }
        else {
            return (<div>Dish not selected </div>);
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish()}
                </div>
            </div>
        );
    };
}


export default Menu;
