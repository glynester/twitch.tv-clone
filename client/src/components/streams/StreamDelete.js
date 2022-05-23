import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';     // Used here to navigate to another url (way to make modal window disappear) when user clicks on background modal screen.
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  //  Every component that gets rendered by react-dom must fetch its own data
  componentDidMount(){
    // console.log("componentDidMount-->StreamDelete",this.props)
    //  We want to call a action creator to attempt to fetch the stream with that ID.
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    // user will see a modal right away and then like a half second later, the title of the stream will appear inside the content.
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={()=>this.props.deleteStream(id)}>Delete</button>
        <Link className="ui button" to='/'>Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent(){
    if (!this.props.stream){
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: 
    ${this.props.stream.title}`;
  }

  render() {
    return (
        <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={()=>history.push('/')}
        />
    );
  }
}

const mapStateToProps=(state, ownProps)=>{
  return { stream: state.streams[ownProps.match.params.id] }
}

// export default connect(null, { fetchStream }) (StreamDelete);
export default connect(mapStateToProps, { fetchStream, deleteStream }) (StreamDelete);