import ColorSwatch from './ColorSwatch'

class CounterButton extends MyReact.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        })
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ColorSwatch number={this.state.count} />
                <div>
                    Count: <span>{this.state.count}</span>
                </div>
            </div>
        )
    }
}

export default CounterButton;