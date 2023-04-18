import React from "react";


class search extends React.Component {
constructor(props){
    super(props)
        this.state={entry:''}
    

}

  render() {
    return (
      <div className="ui segment">
        <h1>welcome</h1>
        <form action="" className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search here..."
                onChange={(event) =>this.setState({entry:event.target.value}) }
                value={this.state.entry}
                />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default search;
