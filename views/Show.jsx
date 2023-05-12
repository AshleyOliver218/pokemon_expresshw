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
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
        };
class Show extends React.Component {
   render () {
    const {pokemon} = this.props
    return (
        <div style={myStyle}>
            <h1> Gotta Catch 'Em All </h1>
            <div style={listStyle}>
                <h2>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)} </h2>
                <img src={pokemon.img + '.jpg'}/>
          </div>
          <a style={{fontSize:'40px'}} href={'/pokemon'}>Back</a>
        </div>
     );
    }
 }
 module.exports = Show;