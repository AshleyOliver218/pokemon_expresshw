const React = require('react');
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
    
   class New extends React.Component {
     render() {
       return (
           <div style={myStyle}>
               <h1>Register Pokemon</h1>
               <form action="/pokemon" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 <input style={listStyle} type="submit" name="" value="Regiser"/>
               </form>
           </div>);
       }
     }

   module.exports = New;