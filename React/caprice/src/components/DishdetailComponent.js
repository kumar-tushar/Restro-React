import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
     </div>
    )
}

function RenderComments({comments, addComment, dishId}) {
    if(comments !=null)
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment)=> {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}</p>
                            <br/><br/>
                        </li>
                    )
                })}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    )
    else
        return (
            <div/>
        )
}

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen:false
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"> Submit comment</span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating" className="form-control" >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">Your name</Label>
                                    <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control"  />
                                    <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 characters or less' }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col >
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                    <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
        )
    }
}






const DishDetail = props => {
    if (props.dish !=null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}/>
                </div>
            </div>
        )
    else
        return(
            <div/>
            );
}


export default DishDetail;