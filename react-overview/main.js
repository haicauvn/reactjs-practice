class App extends React.Component {
    render() {
        // return React.createElement (
        //     'div',
        //     {className: 'row', style: {color: 'red'}},
        //     [
        //         React.createElement('div', {className: 'col'}, 'this is paragraph 1'),
        //         React.createElement('div', {className: 'col'}, 'this is paragraph 2'),
        //     ]
        // )
        return (
            // <div className='row' style={{color: 'red'}}>
            //     <div className='col'>
            //         <p>Paragraph</p>
            //     </div>
            //     <div className='col'>This is paragraph</div>
            // </div>
        <div>TExt</div>
        )
    }
}


// ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('react-root-component')
// )

ReactDOM.render(
    <App/>,
    document.getElementById('react-root-component')
)
