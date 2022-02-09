import React from "react";








export default function Personal_Area() {
    return (

        <section className="my-20">
            <h1 className="text-4xl text-white">
                hello world
                sd,mvksm
            </h1>
            sfvnblnslnvklnldsvmksdmlkmvkdsmvkm
            lksjdnvlknlmld;s
        </section>

    )
}









class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
}