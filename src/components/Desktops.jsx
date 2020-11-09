import React, { Component } from "react";
import DesktopCollection from './Items/Desktop';
import axios from 'axios';

class Desktops extends Component {
    state = {
      allDesktops: [],
      result: []
    };
  
    render() {
      return (
          <div className="container"  >
            <div className="row" >
              {this.state.allDesktops.map((desktops) => (
                <div className="col" key={desktops.id}>
                  <DesktopCollection 
                    key={desktops.id} 
                    desktops={desktops}
                    onLike={() => this.likeBook(desktops)}
                  />
                </div>
              ))}
            </div>
          </div>
      );
    }
  /*
    async likeBook(books){
      
      await axios.put(`http://localhost:5000/api/home/${books.id}`, {
        likeCount: books.likeCount + 1,
      });
  
      let allBooks = [...this.state.allBooks];
      let index = allBooks.indexOf(books);
      allBooks[index] = {...books };
      allBooks[index].likeCount++;
      this.setState({allBooks : allBooks});
      
    }*/
  
    async componentDidMount() {
      const { data } = await axios.get("http://localhost:5000/api/desktopPC");
      console.log(data);
  
      let desktops = data.map((Desktop) => {
        return {
          id: Desktop._id,
          imgUrl: Desktop.imgUrl,
          itemCode: Desktop.itemCode,
          itemName: Desktop.itemName,
          stock: Desktop.stock,
          itemDescription: Desktop.itemDescription,
          itemQty: Desktop.itemQty,
          warranty: Desktop.warranty,
          itemPrice: Desktop.itemPrice,
          likeCount: Desktop.likeCount,
        };
      });
      this.setState({ allDesktops: desktops });
    }
  }
  
  export default Desktops;
  