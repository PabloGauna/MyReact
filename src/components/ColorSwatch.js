class ColorSwatch extends MyReact.Component {
    render() {
        const red = this.props.number % 256;
        return (
            <div
                style={{
                    backgroundColor: `rgb(${red}, 0, 0)`,
                    height: '50px',
                    width: '50px'
                }}
            />
        );
    }
}

export default ColorSwatch;