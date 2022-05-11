import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import authReducer from '../../reducers/authReducer';

class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderButtons(userId){
    if (userId===this.props.currentUserId && userId!==null){ 
      return (
        <div className='right floated content'>
          <button className='ui button primary'>Edit</button>
          <button className='ui button negative'>Delete</button>
        </div>
      )
    }
  }

  renderNewStreamButton(){
    if (this.props.isSignedIn){
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className='ui button primary'>   {/* Use React Link always */}
            Create Stream
          </Link>
        </div>
      )
    }
  }

  renderList(){
    return this.props.streams.map(stream=>{
      return (
        <div className='item' key={stream.id}>
          {this.renderButtons(stream.userId)}   {/* Buttons - called here for semantic UI styling and not at end*/}
          <i className='large middle aligned icon camera'></i>
          <div className='content'>
            {stream.title}
            <div className='description'>
              {stream.description} 
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    console.log("Streams=>",this.props.streams)
    return (
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>
        {this.renderList()}
      </div>
      {this.renderNewStreamButton()}
    </div>
    )
  }
}

const mapStateToProps=(state)=>{
  // Turn streams object from store back into an array
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}
// const StreamList=()=>{
//   return (
//     <div>StreamList</div>
//   )
// }

// export default StreamList;
// export default connect(null, { fetchStreams })(StreamList);  // Interim stage before mapStateToProps
export default connect(mapStateToProps, { fetchStreams })(StreamList);
