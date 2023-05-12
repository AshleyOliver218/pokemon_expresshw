const React = require('react')
const myStyle = {
    color: '#Fb4891',
    backgroundColor: '#475894',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center'
    };
    const listStyle = {
    listStyleType: 'none',
    backgroundColor: '#7faede',
    color: '#ee82ee',
    margin: '0px',
    padding: '5px',
    paddingLeft: '20vw',
    paddingRight: '20vw',
    display:'flex',
    justifyContent: 'center',
    };
    
    class Index extends React.Component {
        render(){
            const {pokemon} = this.props
        return (
          <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
                    {pokemon.map((pokemon, i) => {
                        return (
                            <li style={listStyle}>
                               
                                <a style={listStyle} href={`/pokemon/${pokemon.id}`}>
                                    {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
                                </a>{' '}
                                
                            </li>
                        );
                    })}
                </ul>
                    <a href={`/pokemon/new`}>Register New Pokemon</a>
        </div>
        )
        }
    }
    module.exports = Index;