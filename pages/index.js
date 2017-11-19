export default class HomePage extends React.Component {
  render(){
    return(
      <section>
        <style jsx>{`
          section {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
          .menu {
            position: absolute;
            display: flex;
            flex-direction: row;
            top: 0;
            right: 10px;
            width: 50%;
          }
          .menu p {
            flex-grow: 1; 
            flex-basis: 25%;
            text-align: center;
          }
          .menu p:hover {
            border: 1px solid black;
            border-radius: 10px;
            background: black;
            color: white;
          }
          .container {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 50%;
            flex-wrap: wrap;
          }
          .bg-img {
            display: block;
            width: 100%;
            height: 100%;
            background: url("./static/IMG_3095.JPG") no-repeat center;
            background-size: cover;
            z-index: -100;
          }
          .info {
            text-align: center;
            flex-grow: 1;
          }
        `}</style>
        <div className="container">
          <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p>Collection</p>
            <p>Blog</p>
          </div>
          <div style={{
            width: '100%',
            height: '100%',
            flexGrow: 1,
          }}>
            <div className="bg-img">
            </div>
          </div>
           <div className="info">
                <p>Nguyen Thanh Mai</p>
                <p>26/10/1996</p>
                <p>74-60-90</p>
                <p>Yen Phong, Bac Ninh</p>
                <p>Japanese - Hanu</p>
            </div>
        </div>
      </section>
    )
  }
}